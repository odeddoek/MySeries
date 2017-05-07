import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from "graphql";

import * as rp from "request-promise";

import { ShowRepository } from "../bl/show-repository";

import episodeType from "./episode";
import castType from "./cast";
import showReviewType from "./show-review";

import { EpisodeRepository }  from "../bl/episode-repository";

export default new GraphQLObjectType({
    name: "Show",
    fields: {
        id: {
            type: GraphQLInt
        },
        url: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        genres: {
            type: new GraphQLList(GraphQLString)
        },
        status: {
            type: GraphQLString
        },
        airstamp: {
            type: GraphQLString
        },
        runtime: {
            type: GraphQLInt
        },
        premiered: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLInt
        },
        summary: {
            type: GraphQLString
        },
        updated: {
            type: GraphQLInt
        },
        image: {
            type: GraphQLString,
            resolve: (root) => {
                if (root.image) {
                    return root.image.original;
                }

                return null;
            }
        },
        network: {
            type: GraphQLString,
            resolve: (root) => {
                if (root.network) {
                    return root.network.name;
                }

                return null;
            }
        },
        episodes: {
            type: new GraphQLList(episodeType),
            resolve: (show, args: any, context: any) => {
                return rp(`http://api.tvmaze.com/shows/${show.id}/episodes`)
                    .then((res) => {
                        var episodesData = JSON.parse(res);
                        if (!context.session.name) {
                            return episodesData;
                        } else {
                            var episodeRepository = new EpisodeRepository();
                            return episodeRepository.getWatchedEpisodes(context.session.name, show.id).then((episodesStatus) => {
                                episodesStatus.forEach(watchedEpisode => {
                                    episodesData.forEach(episode => {
                                        if (episode.season === watchedEpisode.season && episode.number === watchedEpisode.episodeNumber) {
                                            episode.watched = true;
                                        }
                                    })
                                });

                                return episodesData;
                            });
                        }
                    });

            }
        },
        reviews: {
            type: new GraphQLList(showReviewType),
            resolve: (root) => {
                var showRepository = new ShowRepository();
                return showRepository.getShowReviews(root.id).then((reviews) => {
                    return reviews;
                });
            }
        },
        cast: {
            type: new GraphQLList(castType),
            resolve: (root) => {
                return rp(`http://api.tvmaze.com/shows/${root.id}/cast`)
                    .then((res) => JSON.parse(res));
            }
        }
    }
});

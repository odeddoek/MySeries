import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList
} from "graphql";

import { EpisodeRepository } from "../bl/episode-repository";

import episodeReviewType from "./episode-review";
import showType from "./show";

export default new GraphQLObjectType({
    name: "Episode",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        show: {
            type: showType
        },
        url: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        season: {
            type: GraphQLInt
        },
        number: {
            type: GraphQLInt
        },
        airdate: {
            type: GraphQLString
        },
        airtime: {
            type: GraphQLString
        },
        airstamp: {
            type: GraphQLString
        },
        runtime: {
            type: GraphQLInt
        },
        summary: {
            type: GraphQLString
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
        watched: {
            type: GraphQLBoolean,
            resolve: (root) => {
                return (root.watched === true);
            }
        },
        reviews: {
            type: new GraphQLList(episodeReviewType),
            resolve: (root, args, context, ast) => {
                var episodeRepository = new EpisodeRepository();
                return episodeRepository.getEpisodeReviews(root.show.id, root.season, root.number).then((reviews) => {
                    return reviews;
                });
            }
        },
    })
});

import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} from "graphql";

import * as rp from "request-promise";

import episodeType from "./episode";
import showType from "./show";

const cools = [{
    id: "1",
    title: "Game of thrones",
    img: "http://static.tvmaze.com/uploads/images/original_untouched/53/132622.jpg"
},
    {
        id: "2",
        title: "The Big Bang Theory",
        img: "http://static.tvmaze.com/uploads/images/original_untouched/58/145601.jpg"
    },
    {
        id: "3",
        title: "House of Cards",
        img: "http://static.tvmaze.com/uploads/images/original_untouched/78/196742.jpg"
    }
];

const tvShowType: GraphQLObjectType = new GraphQLObjectType({
    name: "tvShows",
    fields: {
        id: {
            type: GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        img: {
            type: GraphQLString
        }
    }
});

export const schema: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            tvShows: {
                type: new GraphQLList(tvShowType),
                resolve: (_, args: any) => {
                    return cools;
                }
            },
            schedule: {
                type: new GraphQLList(episodeType),
                resolve: (_, args: any) => {
                    return rp(`http://api.tvmaze.com/schedule`)
                        .then((res) => JSON.parse(res));
                }
            },
            episode: {
                type: episodeType,
                args: {
                    id: {
                        name: "id",
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (_, args: any) => {
                    return rp(`http://api.tvmaze.com/episodes/${args.id}`)
                        .then((res) => JSON.parse(res));
                }
            },
            show: {
                type: showType,
                args: {
                    id: {
                        name: "id",
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (_, args: any) => {
                    return rp(`http://api.tvmaze.com/shows/${args.id}`)
                        .then((res) => JSON.parse(res));
                }
            }
        }
    }),
});

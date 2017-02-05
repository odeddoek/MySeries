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

import * as ShowRepository  from "../bl/ShowRepository";

export const schema: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            schedule: {
                type: new GraphQLList(episodeType),
                resolve: (parent, args: any, context: any) => {
                    console.log(context.session);
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
                resolve: (parent, args: any, context: any) => {
                    return rp(`http://api.tvmaze.com/shows/${args.id}`)
                        .then((res) => JSON.parse(res));
                }
            },
            shows: {
                type: new GraphQLList(showType),
                resolve: (parent, args: any, context: any) => {
                    if (!context.session.name) {
                        throw new Error("You must be logged in!");
                    } else {
                        var result = ShowRepository.getUserShows(context.session.name).then((doc) => doc.map((show) => {
                            return rp(`http://api.tvmaze.com/shows/${show.tvMazeId}`)
                                .then((res) => JSON.parse(res));
                        }));
                        return result;
                    }
                }
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: "RootMutationType",
        fields: {
            setName: {
                type: GraphQLString,
                args: {
                    name: {
                        name: "name",
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args: any, context: any) => {
                    if (context.session.name) {
                        return "You are already logged in!";
                    }
                    context.session.name = args.name;
                    return "Login sucessfully!"
                }
            }
        }
    })
});

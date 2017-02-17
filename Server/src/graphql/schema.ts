import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} from "graphql";

import * as rp from "request-promise";
import * as Promise from "Promise";

import episodeType from "./episode";
import showType from "./show";

import { ShowRepository }  from "../bl/show-repository";
import { Auth } from "../bl/auth";


export const schema: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            self: {
                type: GraphQLString,
                resolve: (parent, args: any, context: any) => {
                    return context.session.name;
                }
            },
            schedule: {
                type: new GraphQLList(episodeType),
                resolve: (parent, args: any, context: any) => {
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
            findShows: {
                type: new GraphQLList(showType),
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args: any, context: any) => {
                    return rp(`http://api.tvmaze.com/search/shows?q=${args.name}`)
                        .then((res) => JSON.parse(res).map((show) => show.show));
                }
            },
            shows: {
                type: new GraphQLList(showType),
                resolve: (parent, args: any, context: any) => {
                    if (!context.session.name) {
                        throw new Error("You must be logged in!");
                    } else {
                        var showRepository = new ShowRepository();
                        var result = showRepository.getUserShows(context.session.name).then((doc) => doc.map((show) => {
                            return rp(`http://api.tvmaze.com/shows/${show}`)
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
            followTvShow:
            {
                type: showType,
                args: {
                    id: {
                        name: "id",
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (parent, args: any, context: any) => {
                    if (!context.session.name) {
                        throw new Error("You must be logged in in order to follow a tv show!");
                    } else {
                        var showRepository = new ShowRepository();
                        return showRepository.addUserTvShow(context.session.name, args.id).then((result) => {
                            return rp(`http://api.tvmaze.com/shows/${args.id}`)
                                .then((res) => JSON.parse(res));
                        }, (err) => {
                            console.log("err", err);
                        });
                    }
                }

            },
            logout: {
                type: GraphQLString,
                resolve: (parent, args: any, context) => {
                    return new Promise<string>((resolve, reject) => {
                        context.session.destroy((err) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve("Logged out sucessfully!");
                            }
                        });
                    });
                }
            },
            login: {
                type: GraphQLString,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args: any, context) => {
                    var auth = new Auth();
                    return auth.validatePassword(args.username, args.password).then((validLogin) => {
                        if (validLogin) {
                            context.session.name = args.username;
                            return "Logged in successfully!";
                        } else {
                            throw new Error("login failed!");
                        }
                    });
                }
            },
            createUser: {
                type: GraphQLString,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args: any, context: any) => {
                    var auth = new Auth();
                    return auth.createUser(args.username, args.password).then((userCreatedSucessfully) => {
                        if (userCreatedSucessfully) {
                            return "User created sucessfully!";
                        } else {
                            throw new Error("User could not be created");
                        }
                    });
                }
            }
        }
    })
});

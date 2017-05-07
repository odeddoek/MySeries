import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLUnionType
} from "graphql";
import * as rp from "request-promise";

import { UserRepository } from "../bl/user-repository";

import episodeType from "./episode";
import userType from "./user";


export default new GraphQLObjectType({
    name: "EpisodeReview",
    fields: () => ({
        user: {
            type: userType,
            resolve: (root) => {
                const userRepository = new UserRepository();
                return userRepository.getUserById(root.user);
            }
        },
        episode: {
            type: episodeType,
            resolve: (parent, args: any, context: any) => {
                return rp(`http://api.tvmaze.com/shows/${parent.tvMazeId}/episodebynumber?season=${parent.season}&number=${parent.number}`)
                    .then((res) => {
                        return JSON.parse(res);
                    });
            }
        },
        content: { type: GraphQLString }
    })
});

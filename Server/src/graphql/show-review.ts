import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLUnionType
} from "graphql";
import { Schema } from "mongoose";
import { ObjectIdType } from "./object-id-type";
import showType from "./show";
import userType from "./user";
import { UserRepository } from "../bl/user-repository";
import * as rp from "request-promise";

export default new GraphQLObjectType({
    name: "ShowReview",
    fields: () => ({
        user: {
            type: userType,
            resolve: (root) => {
                const userRepository = new UserRepository();
                return userRepository.getUserById(root.user);
            }
        },
        show: {
            type: showType,
            resolve: (parent, args: any, context: any) => {
                return rp(`http://api.tvmaze.com/shows/${parent.showId}`)
                    .then((res) => JSON.parse(res));
            }
        },
        content: { type: GraphQLString }
    })
});

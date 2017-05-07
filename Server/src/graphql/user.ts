import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from "graphql";

import showReviewType from "./show-review";
import { UserRepository } from "../bl/user-repository";

export default new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: (root) => {
                return root._id;
            }
        },
        username: {
            type: GraphQLString
        },
        showReviews: {
            type: new GraphQLList(showReviewType),
            resolve: (root) => {
                var userRepository = new UserRepository();
                return userRepository.getUserShowReviews(root._id).then((reviews) => {
                    console.log(reviews);
                    return reviews;
                });
            }
        },
    })
});

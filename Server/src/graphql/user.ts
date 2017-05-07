import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from "graphql";

export default new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLID,
            resolve: (root) => {
                return root._id;
            }
        },
        username: {
            type: GraphQLString
        }
    }
});

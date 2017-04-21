import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
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
        }
    }
});

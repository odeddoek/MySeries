import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        }
    }
});

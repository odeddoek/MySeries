import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Episode',
    fields: {
        id: {
            type: GraphQLInt
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
        }
    }
});

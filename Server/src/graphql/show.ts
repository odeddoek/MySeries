import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql';

import * as rp from 'request-promise';

import episodeType from './episode';

export default new GraphQLObjectType({
    name: 'Show',
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
        type: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        genres: {
            type: new GraphQLList(GraphQLString)
        },
        status: {
            type: GraphQLString
        },
        airstamp: {
            type: GraphQLString
        },
        runtime: {
            type: GraphQLInt
        },
        premiered: {
            type: GraphQLInt
        },
        weight: {
            type: GraphQLInt
        },
        summary: {
            type: GraphQLString
        },
        updated: {
            type: GraphQLInt
        },
        image: {
            type: GraphQLString,
            resolve: (root) => {
                if (root.image) {
                    return root.image.original;
                }

                return null;
            }
        },
        episodes: {
            type: new GraphQLList(episodeType),
            resolve: (root) => {
                return rp(`http://api.tvmaze.com/shows/${root.id}/episodes`)
                    .then((res) => JSON.parse(res));
            }
        }
    }
});

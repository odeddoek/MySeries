import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID
} from 'graphql';


import characterType from './character';

import personType from './person';

export default new GraphQLObjectType({
    name: 'Cast',
    fields: {
        person: {
            type: personType
        },
        character: {
            type: characterType
        }
    }
});

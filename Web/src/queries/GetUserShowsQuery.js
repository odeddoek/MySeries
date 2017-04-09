import gql from 'graphql-tag';

const getUserShows = gql `query getUserShows{
  shows {
    id
    url
    name
    image
  }
}`;

export default getUserShows;

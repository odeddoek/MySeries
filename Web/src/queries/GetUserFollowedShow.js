import gql from 'graphql-tag';

const getShowEpisodesQuery = gql `query getShowEpisodes ($id: Int!){
  show : show(id: $id) {
    id
    episodes {
      id
      name
      season
      number
      airstamp
      image
      summary
      watched
    }
  }
}`;

export default getShowEpisodesQuery;

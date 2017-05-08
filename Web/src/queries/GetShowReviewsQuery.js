import gql from 'graphql-tag';

const getShowReviewsQuery = gql `query getShowReviews ($id: Int!){
  show : show(id: $id) {
    id
    reviews {
      user {
        username
      }
      content
    }
  }
}`;

export default getShowReviewsQuery;

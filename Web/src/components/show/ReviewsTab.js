import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from './../common/Spinner';
import Loading from 'react-loading-spinner';
import {connect} from 'react-redux';

import ShowReviewList from './../review/ShowReviewList';
import WriteShowReview from './../review/WriteShowReview';

import getShowReviewsQuery from '../../queries/getShowReviewsQuery';

class ReviewsTab extends Component {

  render() {
    const {loading, show} = this.props.data;
    const isAuthenticated = this.props.user.username && this.props.user.username.length > 0;

    return (
      <div>
        {isAuthenticated && <WriteShowReview showId={this.props.showId}/>}
        <Loading isLoading={loading} spinner={Spinner}>
          {show && <ShowReviewList reviews={show.reviews}/>}
        </Loading>
      </div>
    );
  }
}

const getShowReviews = graphql(getShowReviewsQuery, {
  options(ownProps) {
    return {
      variables: {
        id: ownProps.showId
      }
    };
  }
});

function mapStateToProps(state, ownProps) {
  return {user: state.user};
}

export default compose(getShowReviews, connect(mapStateToProps))(ReviewsTab);

import React, {Component} from 'react';
import EpisodesTable from './../episode/EpisodesTable';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import toastr from 'toastr';
import Spinner from './../common/Spinner';
import Loading from 'react-loading-spinner';
import getUserFollowedShowQuery from '../../queries/GetUserFollowedShow';
import {connect} from 'react-redux';

class EpisodeTab extends Component {

  constructor(props, context) {
    super(props, context);

    this.markEpisodeAsWatched = this.markEpisodeAsWatched.bind(this);
  }

  markEpisodeAsWatched(season, number) {
    this.props.mutate({
      variables: {
        showId: this.props.showId,
        season: season,
        number: number
      },
      refetchQueries: [
        {
          query: getUserFollowedShowQuery,
          variables: {
            id: this.props.showId
          }
        }
      ]
    }).then(({data}) => {
      toastr.success(`Episode marked as watched!`);
    }).catch((error) => {
      toastr.error(error);
    });
  }

  render() {
    const {loading, show} = this.props.data;
    const isAuthenticated = this.props.user.username && this.props.user.username.length > 0;;

    return (
      <Loading isLoading={loading} spinner={Spinner}>
        {show && <EpisodesTable episodes={show.episodes} watchedAction={this.markEpisodeAsWatched} isAuthenticated={isAuthenticated}/>}
      </Loading>
    );
  }
}

const getShowEpisodes = graphql(getUserFollowedShowQuery, {
  options(ownProps) {
    return {
      variables: {
        id: ownProps.showId
      }
    };
  }
});

const markEpisodeAsWatchedQuery = graphql(gql `mutation ($showId: Int!, $season: Int!, $number: Int!) {
  markEpisodeAsWatched(tvShowId: $showId, season: $season, number: $number)
}`);

function mapStateToProps(state, ownProps) {
  return {user: state.user};
}

export default compose(getShowEpisodes, markEpisodeAsWatchedQuery, connect(mapStateToProps))(EpisodeTab);

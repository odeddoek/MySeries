import React, {Component} from 'react';
import EpisodesTable from './../episode/EpisodesTable';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from './../common/Spinner';
import Loading from 'react-loading-spinner';

class EpisodeTabContainer extends Component {

  render() {
    const {loading, show} = this.props.data;

    return (
      <Loading isLoading={loading} spinner={Spinner}>
        {show && <EpisodesTable episodes={show.episodes}/>}
      </Loading>
    );
  }
}

const getShowEpisodesQuery = gql `query getShow ($id: Int!){
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
    }
  }
}`;

const getShowEpisodes = graphql(getShowEpisodesQuery, {
  options(ownProps) {
    return {
      variables: {
        id: ownProps.showId
      }
    };
  }
});

export default compose(getShowEpisodes)(EpisodeTabContainer);

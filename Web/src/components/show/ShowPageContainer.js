import React, {Component} from 'react';
import ShowPage from './ShowPage';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from './../common/Spinner';
import Loading from 'react-loading-spinner';

class ShowPageContainer extends Component {

  render() {

    const {loading, show} = this.props.data;

    return (
      <Loading isLoading={loading} spinner={Spinner}>
        {show && <ShowPage show={show}/>}
      </Loading>
    );
  }
}

const getShowQuery = gql `query getShow ($id: Int!){
  show : show(id: $id) {
    id
    name
    image
    genres
    status
    premiered
    runtime
    summary
    network
  }
}`;

const getShow = graphql(getShowQuery, {
  options(ownProps) {
    return {
      variables: {
        id: ownProps.params.id
      }
    };
  }
});

export default compose(getShow)(ShowPageContainer);

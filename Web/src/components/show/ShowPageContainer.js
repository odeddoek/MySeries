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
      <section className="section">
        <div className="container content">
          <Loading isLoading={loading} spinner={Spinner}>
            {show && <ShowPage show={show}/>}
          </Loading>
        </div>
      </section>
    );
  }
}

const getShowQuery = gql `query getShow ($id: Int!){
  show : show(id: $id) {
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

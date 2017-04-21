import React, {Component} from 'react';
import ShowCastList from './../cast/ShowCastList';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from './../common/Spinner';
import Loading from 'react-loading-spinner';

class CastTab extends Component {

  render() {
    const {loading, show} = this.props.data;

    return (
      <Loading isLoading={loading} spinner={Spinner}>
        {show && <ShowCastList cast={show.cast}/>}
      </Loading>
    );
  }
}

const getShowCastQuery = gql `query getShowCast ($id: Int!){
  show : show(id: $id) {
    id
    cast{
      person {
        name
      }
      character{
        id
        name
        image
      }
    }
  }
}`;

const getShowCast = graphql(getShowCastQuery, {
  options(ownProps) {
    return {
      variables: {
        id: ownProps.showId
      }
    };
  }
});

export default compose(getShowCast)(CastTab);

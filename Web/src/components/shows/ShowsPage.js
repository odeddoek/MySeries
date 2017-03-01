import React, {PropTypes} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ShowList from './ShowList';
import Loading from 'react-loading-spinner';
import 'react-loading-spinner/src/css/index.css';
import Spinner from './../common/Spinner';
class ShowsPage extends React.Component {

  render() {
    const isLoading = this.props.data.loading;
    const shows = this.props.data.shows;

    return (
      <div>
        <h1>Shows</h1>
        <Loading isLoading={isLoading} spinner={Spinner}>
          {shows && <ShowList shows={shows} following={true}/>}
        </Loading>
      </div>
    );
  }
}

ShowsPage.propTypes = {
  data: PropTypes.shape({loading: PropTypes.bool.isRequired, shows: PropTypes.array})
};

const query = gql `{
  shows {
    id
    url
    name
    image
  }
}`;

export default graphql(query)(ShowsPage);

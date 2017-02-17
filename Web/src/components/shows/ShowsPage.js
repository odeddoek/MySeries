import React, {PropTypes} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ShowList from './ShowList';

class ShowsPage extends React.Component {

  render() {
    const isLoading = this.props.data.loading;
    const shows = this.props.data.shows;

    if (isLoading) {
      return null;
    }

    return (
      <div>
        <h1>Shows</h1>
        <ShowList shows={shows} following={true}/>
      </div>
    );
  }
}

ShowsPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    shows: PropTypes.array.isRequired
  }),
  shows: PropTypes.array.isRequired
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

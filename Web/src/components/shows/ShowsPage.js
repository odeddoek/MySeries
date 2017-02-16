import React, {PropTypes} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ShowList from './ShowList';

class ShowsPage extends React.Component {

  render() {
    const isLoading = this.props.data.loading;
    const shows = this.props.data.shows;

    debugger;

    if (isLoading) {
      return null;
    }

    return (
      <div>
        <h1>Shows</h1>
        <ShowList shows={shows}/>
      </div>
    );
  }
}

ShowsPage.propTypes = {
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

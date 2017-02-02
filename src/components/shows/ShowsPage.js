import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShowList from './ShowList';
import * as showsActions from '../../actions/tvShowActions';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';

class ShowsPage extends React.Component {
  constructor(props, context)
  {
    super(props, context);
  }

  render() {
    const isLoading = this.props.data.loading;
    const tvShows = this.props.data.tvShows;

    return (
      <div>
        <h1>Shows</h1>
        {!isLoading && <ShowList shows={tvShows}/>}
      </div>
    );
  }
}

ShowsPage.propTypes = {
  data: PropTypes.shape({loading: PropTypes.bool.isRequired, tvShows: PropTypes.array}).isRequired
};

const query = gql `{  tvShows  {    id    title    img  }}`;

export default compose(graphql(query))(ShowsPage);

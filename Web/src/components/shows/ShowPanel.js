import React, {PropTypes} from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import ShowListRow from './ShowListRow';

class ShowPanel extends React.Component {
  render() {
    const isLoading = this.props.data.loading;
    const show = this.props.data.show;

    if (isLoading) {
      return null;
    }

    return (<ShowListRow key={show.id} show={show}/>);
  }
}

ShowPanel.propTypes = {
  showId: PropTypes.number.isRequired
};

const query = gql `
query show($show: Int!) {
  show(id: $show)
  {
    id
    url
    name
    image
  }
}`;

export default graphql(query, {
  options: ({showId}) => ({
    variables: {
      show: showId
    }
  })
})(ShowPanel);

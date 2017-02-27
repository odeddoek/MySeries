import React, {PropTypes} from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import ShowList from './ShowList';
import toastr from 'toastr';
import {connect} from 'react-redux';
import Loading from 'react-loading-spinner';
import Spinner from './../common/Spinner';

class FindShows extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchDetails: Object.assign({}, this.props.searchDetails),
      errors: {}
    };

    this.updateSearchDetails = this.updateSearchDetails.bind(this);
    this.searchShow = this.searchShow.bind(this);
    this.followShow = this.followShow.bind(this);
  }

  updateSearchDetails(event) {
    const field = event.target.name;
    let searchDetails = this.state.searchDetails;
    searchDetails[field] = event.target.value;
    return this.setState({searchDetails});
  }

  searchShow(event) {
    event.preventDefault();
    const {showName} = this.state.searchDetails;
    this.props.data.refetch({name: showName}).catch((error) => {
      toastr.error(error);
    });
  }

  followShow(showId) {
    this.props.mutate({
      variables: {
        id: showId
      }
    }).then(({data}) => {
      toastr.success(`Following ${data.followTvShow.name} successfully!`);
    }).catch((error) => {
      toastr.error(error);
    });
  }

  render() {
    const isLoading = this.props.data.loading;
    const shows = this.props.data.shows;

    return (
      <div>
        <h1>Find shows</h1>
        <p className="control has-addons">
          <input name="showName" className="input" type="text" placeholder="Find a repository" value={this.state.searchDetails.showName} onChange={this.updateSearchDetails}/>
          <a className="button is-info" onClick={this.searchShow}>
            Search
          </a>
        </p>
        <Loading isLoading={isLoading} spinner={Spinner}>
          {shows && <ShowList shows={shows} following={false} followAction={this.followShow}/>}
        </Loading>
      </div>
    );
  }
}

FindShows.propTypes = {
  data: PropTypes.shape({loading: PropTypes.bool.isRequired, shows: PropTypes.array.isRequired, refetch: PropTypes.func.isRequired}),
  searchDetails: PropTypes.shape({showName: PropTypes.string.isRequired}),
  shows: PropTypes.array.isRequired
};

const findShowGql = gql `query findShows ($name: String!){
  shows : findShows(name: $name) {
    id
    url
    name
    image
  }
}`;

const followTvShow = gql `mutation ($id: Int!) {
  followTvShow (id: $id) {
    id
    name
  }
}`;

function mapStateToProps(state, ownProps) {
  let searchDetails = {
    showName: ''
  };

  return {searchDetails};
}

let findShowQuery = graphql(findShowGql, {
  options({name}) {
    return {
      variables: {
        name: `${name}`
      }
    };
  }
});

let followTvShowMutation = graphql(followTvShow);

export default compose(findShowQuery, followTvShowMutation, connect(mapStateToProps))(FindShows);

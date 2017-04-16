import React, {PropTypes} from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import ShowList from './ShowList';
import toastr from 'toastr';
import {connect} from 'react-redux';
import Loading from 'react-loading-spinner';
import Spinner from './../common/Spinner';
import GetUserShowsQuery from '../../queries/GetUserShowsQuery';
import Input from '../common/form/Input';

class FindShows extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchDetails: Object.assign({}, this.props.searchDetails)
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
      },
      refetchQueries: [{query: GetUserShowsQuery}]
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
      <section className="section">
        <div className="container content">
        <h1>Find shows</h1>
        <form className="control has-addons" onSubmit={this.searchShow}>
          <Input name="showName" className="input" type="text" placeholder="Find a repository" value={this.state.searchDetails.showName} onChange={this.updateSearchDetails}/>
          <button className="button is-info" type="submit">Search</button>
        </form>
        <Loading isLoading={isLoading} spinner={Spinner}>
          {shows && <ShowList shows={shows} actionText="Follow" action={this.followShow}/>}
        </Loading>
      </div>
    </section>
    );
  }
}

FindShows.propTypes = {
  data: PropTypes.shape({loading: PropTypes.bool.isRequired, shows: PropTypes.array, refetch: PropTypes.func.isRequired}),
  searchDetails: PropTypes.shape({showName: PropTypes.string.isRequired})
};

const findShowGql = gql `query findShows ($name: String!){
  shows : findShows(name: $name) {
    id
    url
    name
    image
  }
}`;

const followTvShowMutation = graphql(gql `mutation ($id: Int!) {
  followTvShow (id: $id) {
    id
    name
  }
}`);

function mapStateToProps(state, ownProps) {
  let searchDetails = {
    showName: ''
  };

  return {searchDetails};
}

const findShowQuery = graphql(findShowGql, {
  options({name}) {
    return {
      variables: {
        name: `${name}`
      }
    };
  }
});

export default compose(findShowQuery, followTvShowMutation, connect(mapStateToProps))(FindShows);

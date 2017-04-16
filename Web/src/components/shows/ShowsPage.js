import React, {PropTypes} from 'react';
import {graphql, compose} from 'react-apollo';
import ShowList from './ShowList';
import Loading from 'react-loading-spinner';
import 'react-loading-spinner/src/css/index.css';
import Spinner from './../common/Spinner';
import toastr from 'toastr';
import gql from 'graphql-tag';
import GetUserShowsQuery from '../../queries/GetUserShowsQuery';

class ShowsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.unfollowShow = this.unfollowShow.bind(this);
  }

  unfollowShow(showId) {
    this.props.mutate({
      variables: {
        id: showId
      },
      refetchQueries: [
        {
          query: GetUserShowsQuery
        }
      ]
    }).then(({data}) => {
      toastr.success(`${data.unfollowTvShow}`);
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
          <h1>Shows</h1>
          <Loading isLoading={isLoading} spinner={Spinner}>
            {shows && <ShowList shows={shows} actionText="Unfollow" action={this.unfollowShow}/>}
          </Loading>
        </div>
      </section>
    );
  }
}

ShowsPage.propTypes = {
  data: PropTypes.shape({loading: PropTypes.bool.isRequired, shows: PropTypes.array})
};

const query = graphql(GetUserShowsQuery);

const unfollowTvShow = graphql(gql `mutation ($id: Int!) {
  unfollowTvShow (id: $id)
}`);

export default compose(query, unfollowTvShow)(ShowsPage);

import React, {PropTypes, Component} from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import toastr from 'toastr';
import {connect} from 'react-redux';
import Input from '../common/form/Input';
import PostReviewForm from './PostReviewForm';

import getShowReviewsQuery from '../../queries/getShowReviewsQuery';

class WriteShowReview extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      formDetails: Object.assign({}, this.props.formDetails)
    };

    this.updateFormDetails = this.updateFormDetails.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateFormDetails(event) {
    const field = event.target.name;
    let formDetails = this.state.formDetails;
    formDetails[field] = event.target.value;
    return this.setState({formDetails});
  }

  submit() {
    this.props.mutate({
      variables: {
        tvShowId: this.props.showId,
        content: this.state.formDetails.content
      },
      refetchQueries: [
        {
          query: getShowReviewsQuery,
          variables: {
            id: this.props.showId
          }
        }
      ]
    }).then(({data}) => {
      toastr.success(`Review added sucessfully!`);
    }).catch((error) => {
      toastr.error(error);
    });
  }

  render() {
    return (<PostReviewForm reviewContent={this.state.formDetails.content} onContentChange={this.updateFormDetails} action={this.submit}/>);
  }
}

WriteShowReview.propTypes = {
  formDetails: PropTypes.shape({content: PropTypes.string.isRequired})
};

function mapStateToProps(state, ownProps) {
  let formDetails = {
    content: ''
  };

  return {formDetails};
}

const addShowReviewMutation = graphql(gql `mutation ($tvShowId: Int!, $content: String!) {
  addShowReview (tvShowId: $tvShowId, content: $content)
}`);

export default compose(addShowReviewMutation, connect(mapStateToProps))(WriteShowReview);

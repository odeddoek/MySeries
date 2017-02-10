import React, {PropTypes, Component} from 'react';
import {graphql, compose} from 'react-apollo';
import UserForm from './UserForm';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import gql from 'graphql-tag';
import toastr from 'toastr';
import * as userActions from './../../actions/userActions';

class RegisterPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      userDetails: Object.assign({}, this.props.userDetails),
      errors: {}
    };

    this.updateRegisterState = this.updateRegisterState.bind(this);
    this.register = this.register.bind(this);
  }

  updateRegisterState(event) {
    const field = event.target.name;
    let userDetails = this.state.userDetails;
    userDetails[field] = event.target.value;
    return this.setState({userDetails});
  }

  register(event) {
    event.preventDefault();
    const {username, password} = this.state.userDetails;
    this.props.mutate({
      variables: {
        username: username,
        password: password
      }
    }).then(() => {
      toastr.success('Registered successfully!');
      this.props.actions.setUser(username);
    }).catch((error) => {
      toastr.error(error);
    });
  }

  render() {
    return (
      <div>
        <UserForm actionName="Register" action={this.register} details={this.state.userDetails} onChange={this.updateRegisterState}/>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  mutate: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired
};

const registerMutation = gql `
mutation createUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password)
}`;

function mapStateToProps(state, ownProps) {

  let userDetails = {
    username: '',
    password: ''
  };

  return {userDetails};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default compose(graphql(registerMutation), connect(mapStateToProps, mapDispatchToProps))(RegisterPage);

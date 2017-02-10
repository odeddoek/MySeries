import React, {PropTypes, Component} from 'react';
import {graphql, compose} from 'react-apollo';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import gql from 'graphql-tag';

class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      loginDetails: Object.assign({}, this.props.loginDetails),
      errors: {}
    };

    this.updateLoginState = this.updateLoginState.bind(this);
    this.login = this.login.bind(this);
  }

    updateLoginState(event) {
      const field = event.target.name;
      let loginDetails = this.state.loginDetails;
      loginDetails[field] = event.target.value;
      return this.setState({loginDetails});
    }

  login(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        username: this.state.loginDetails.username,
        password: this.state.loginDetails.password
      }
    }).then(({data}) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  render() {
    return (
      <div>
        <LoginForm action={this.login} details={this.state.loginDetails} onChange={this.updateLoginState}/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  mutate: PropTypes.func.isRequired,
  loginDetails: PropTypes.object.isRequired
};

const loginMutation = gql `
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password)
}`;

function mapStateToProps(state, ownProps) {

  let loginDetails = {
    username: 'ששש',
    password: ''
  };

  return {loginDetails};
}

export default compose(graphql(loginMutation), connect(mapStateToProps))(LoginPage);

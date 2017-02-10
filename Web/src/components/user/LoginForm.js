import React, {PropTypes} from 'react';

const LoginForm = ({details, action, onChange}) => {
  return (
    <div className="column is-4 is-offset-4">
      <h1>Login</h1>
      <div className="box">
        <label className="label">Username</label>
        <p className="control">
          <input name="username" className="input" type="text" placeholder="Username" value={details.username} onChange={onChange}/>
        </p>
        <label className="label">Password</label>
        <p className="control has-icon">
          <input name="password" className="input" type="password" placeholder="Password" value={details.password} onChange={onChange}/>
          <span className="icon is-small">
            <i className="fa fa-lock"/>
          </span>
        </p>
        <hr/>
        <p className="control">
          <button className="button is-primary" onClick={action}>Login</button>
          <button className="button is-default">Cancel</button>
        </p>
      </div>
    </div>
  );
}
//
// LoginForm.propTypes = {
//   details: PropTypes.object.isReqired
// };

export default LoginForm;

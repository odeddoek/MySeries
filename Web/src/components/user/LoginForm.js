import React, {PropTypes} from 'react';
import TextInput from '../common/form/TextInput';

const LoginForm = ({details, action, onChange, errors}) => {
  return (
    <div className="column is-4 is-offset-4">
      <h1>Login</h1>
      <form className="box" onClick={action}>
        <TextInput name="username" label="Username" placeholder="Username" onChange={onChange} value={details.username} error={errors.username}/>
        <TextInput name="password" label="Password" placeholder="Password" onChange={onChange} value={details.password} error={errors.password} icon="fa fa-lock"/>
        <hr/>
        <p className="control">
          <button className="button is-primary" type="submit">Login</button>
          <button className="button is-default">Cancel</button>
        </p>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  details: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default LoginForm;

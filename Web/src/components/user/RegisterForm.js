import React, {PropTypes} from 'react';
import TextInput from '../common/form/TextInput';

const RegisterForm = ({details, action, onChange, errors}) => {
  return (
    <div className="column is-4 is-offset-4">
      <h1>Register</h1>
      <form className="box" onSubmit={action}>
        <TextInput name="username" label="Username" placeholder="Username" onChange={onChange} value={details.username} error={errors.username}/>
        <TextInput name="password" label="Password" placeholder="Password" onChange={onChange} value={details.password} error={errors.password} icon="fa fa-lock"/>
        <TextInput name="repeatPassword" label="Repeat Password" placeholder="Repeat Password" onChange={onChange} value={details.repeatPassword} error={errors.repeatPassword} icon="fa fa-lock"/>
        <hr/>
        <p className="control">
          <button className="button is-primary" type="submit">Register</button>
          <button className="button is-default">Cancel</button>
        </p>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  details: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default RegisterForm;

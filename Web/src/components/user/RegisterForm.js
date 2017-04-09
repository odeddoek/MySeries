import React, {PropTypes} from 'react';
import Input from '../common/form/Input';
import Button from '../common/form/Button';

const RegisterForm = ({details, action, onChange, errors}) => {
  return (
    <div className="column is-4 is-offset-4">
      <h1>Register</h1>
      <form className="box" onSubmit={action}>
        <Input type="text" name="username" label="Username" placeholder="Username" onChange={onChange} value={details.username} error={errors.username}/>
        <Input type="password" name="password" label="Password" placeholder="Password" onChange={onChange} value={details.password} error={errors.password} icon="fa fa-lock"/>
        <Input type="password" name="repeatPassword" label="Repeat Password" placeholder="Repeat Password" onChange={onChange} value={details.repeatPassword} error={errors.repeatPassword} icon="fa fa-lock"/>
        <hr/>
        <p className="control">
          <Button color="is-primary" type="submit">Register</Button>
          <Button type="reset">Cancel</Button>
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

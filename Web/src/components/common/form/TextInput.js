import React, {PropTypes} from 'react';

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  color,
  icon
}) => {

  let inputClass = `input ${color}`;
  let controlClass = 'control'

  if (error && error.length > 0) {
    inputClass += " " + 'is-danger';
    icon = 'fa fa-warning';
  }

  if (icon) {
    controlClass += " " + 'has-icon has-icon-right';
  }

  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <p className={controlClass}>
        <input name={name} className={inputClass} type="text" placeholder={placeholder} value={value} onChange={onChange}/> {icon && <span className="icon is-small">
          <i className={icon}/>
        </span>}
        {error && <span className="help is-danger">{error}</span>}
      </p>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string
};

export default TextInput;

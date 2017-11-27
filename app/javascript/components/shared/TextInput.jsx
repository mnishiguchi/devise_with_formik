import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Custom text input field for Formik and Semantic-UI.
// https://semantic-ui.com/collections/form.html
// https://semantic-ui.com/examples/login.html
const TextInput = ({
  type,
  name,
  label,
  placeholder,
  error,
  value,
  onChange,
  iconClassName
}) => {
  const wrapperClassName = classnames('field', {
    error: !!error
  });

  return (
    <div className={wrapperClassName}>
      {label && <label>{label}</label>}
      <div className="ui left icon input">
        <i className={iconClassName} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconClassName: PropTypes.string.isRequired
};

export default TextInput;

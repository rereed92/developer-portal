import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  name, onChange, placeholder, value, type, className,
}) => (
  <input
    type={type}
    name={name}
    className={`input ${className || ''}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  name: null,
  onChange: () => {},
  placeholder: null,
  value: null,
  type: 'text',
  className: null,
};

export default Input;

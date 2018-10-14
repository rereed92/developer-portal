import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  onClick, text, type, className, disabled,
}) => (
  text
    && (
      <button onClick={onClick} type={type} disabled={disabled} className={`button ${className || ''}`}>
        <span className="button__text">
          {text}
        </span>
      </button>
    )
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  text: null,
  type: 'button',
  className: null,
  disabled: false,
};

export default Button;

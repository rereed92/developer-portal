import React from 'react';
import PropTypes from 'prop-types';

import './Label.scss';

const Label = ({ label, children, className }) => (
  children
    && (
      <label className={`label ${className || ''}`}> {/* eslint-disable-line */}
        <span className="label__label">{ label }</span>
        { children }
      </label>
    )
);

Label.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

Label.defaultProps = {
  label: null,
  children: null,
  className: null,
};

export default Label;

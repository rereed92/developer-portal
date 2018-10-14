import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

const Heading = ({ level, children, className }) => {
  const H = `h${level}`;
  return (
    children
    && (
      <H className={`heading heading--${level} ${className || ''}`}>
        {children}
      </H>
    )
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Heading.defaultProps = {
  level: 2,
  children: null,
  className: null,
};

export default Heading;

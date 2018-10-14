import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ children }) => (
  children && <div className="container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  children: null,
};

export default Container;

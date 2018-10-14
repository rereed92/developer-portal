import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Links.scss';

const Links = ({ location, text, className }) => (
  text && (
    <Link to={location} className={`link ${className || ''}`}>
      {text}
    </Link>
  )
);

Links.propTypes = {
  location: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Links.defaultProps = {
  location: '/',
  text: null,
  className: null,
};

export default Links;

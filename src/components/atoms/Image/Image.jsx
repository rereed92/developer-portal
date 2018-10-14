import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

const Image = ({ src, alt, className }) => (
  src && alt
    && <img src={src} alt={alt} className={`image ${className || ''}`} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: null,
  alt: null,
  className: null,
};

export default Image;

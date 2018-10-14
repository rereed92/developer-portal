import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';

const List = ({
  children, className, isUnstyled, isInline,
}) => (
  children
  && (
    <ul className={`list ${isUnstyled ? 'list--unstyled' : ''} ${isInline ? 'list--inline' : ''} ${className || ''}`}>
      {children}
    </ul>
  )
);

List.propTypes = {
  isUnstyled: PropTypes.bool,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

List.defaultProps = {
  isUnstyled: false,
  isInline: false,
  className: null,
  children: null,
};

export default List;

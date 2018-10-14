import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button/Button';

import './UserNavigation.scss';

const UserNavigation = ({ offset, navigateUsers, usersLength }) => (
  <div className="user-navigation clearfix">
    <Button
      onClick={() => navigateUsers(false)}
      text="Previous"
      disabled={offset === 0}
      className="user-navigations__previous"
    />
    <Button
      onClick={() => navigateUsers(true)}
      text="Next"
      disabled={usersLength === 0}
      className="user-navigation__next"
    />
  </div>
);

UserNavigation.propTypes = {
  offset: PropTypes.number,
  navigateUsers: PropTypes.func,
  usersLength: PropTypes.number,
};

UserNavigation.defaultProps = {
  offset: 0,
  navigateUsers: () => {},
  usersLength: 0,
};

export default UserNavigation;

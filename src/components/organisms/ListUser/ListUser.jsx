import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';
import Heading from '../../atoms/Heading/Heading';

import './ListUser.scss';

const ListUser = ({ user }) => (
  user && (
    <div className="user">
      {user.name
        && <Heading level={2} className="user__name">{user.name}</Heading>
      }
      {user.email && <a href={`mailto:${user.email}`} className="user__email">{user.email}</a>}
      <Image src={user.avatar} alt={user.name} className="user__avatar" />
    </div>
  )
);

ListUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

ListUser.defaultProps = {
  user: null,
};

export default ListUser;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as userActions from '../../../actions/userActions';

import ListUser from '../../organisms/ListUser/ListUser';
import UserNavigation from '../../molecules/UserNavigation/UserNavigation';
import Container from '../../atoms/Container/Container';
import Heading from '../../atoms/Heading/Heading';
import List from '../../atoms/List/List';

import './Users.scss';

class Users extends Component {
  constructor(props) {
    super(props);

    const { location, match } = this.props;
    const searchParams = new URLSearchParams(location.search);

    this.state = {
      id: match.params.id,
      offset: searchParams.has('offset') ? searchParams.get('offset') : 0,
    };

    this.handleUsers = this.handleUsers.bind(this);
    this.handleUsersDisplay = this.handleUsersDisplay.bind(this);
  }

  componentDidMount() {
    this.handleUsers();
  }

  handleUsers() {
    const { actions } = this.props;
    const { id, offset } = this.state;
    actions.loadUsers(id, offset);
  }

  handleUsersDisplay(increase) {
    const value = increase ? 1 : -1;
    this.setState(prevState => ({
      offset: prevState.offset + (25 * value),
    }), () => {
      this.handleUsers();
      window.scrollTo(0, 0);
    });
  }

  render() {
    const { users } = this.props;
    const { offset } = this.state;
    return (
      <div className="users">
        <Container>
          <Heading level={1}>
            Users
          </Heading>

          <UserNavigation
            offset={offset}
            navigateUsers={this.handleUsersDisplay}
            usersLength={users.length}
          />

          {users && users.length > 0
            ? (
              <List isUnstyled className="row">
                {users.map(user => (
                  <li key={user.id} className="col-6 col-md-4 col-lg-3">
                    <ListUser user={user} />
                  </li>
                ))}
              </List>
            )
            : <p className="users__empty">No users to display</p>
          }

          {users.length > 0
            && (
              <UserNavigation
                offset={offset}
                navigateUsers={this.handleUsersDisplay}
                usersLength={users.length}
              />
            )
          }

        </Container>
      </div>
    );
  }
}

Users.propTypes = {
  location: PropTypes.shape(),
  match: PropTypes.shape(),
  actions: PropTypes.shape(),
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  })),
};

Users.defaultProps = {
  location: null,
  match: null,
  actions: null,
  users: null,
};

const mapStateToProps = state => ({
  users: state.usersReducers,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

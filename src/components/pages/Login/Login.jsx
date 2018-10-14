import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as sessionActions from '../../../actions/sessionActions';

import Fieldset from '../../molecules/Fieldset/Fieldset';
import Container from '../../atoms/Container/Container';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    const { location } = this.props;

    this.state = {
      credentials: {
        email: '',
        password: '',
      },
      from: location.state === undefined ? '/' : location.state.from,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { credentials } = this.state;
    credentials[name] = value;

    this.setState({
      credentials,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { credentials, from } = this.state;
    const { actions } = this.props;

    if (credentials.email && credentials.password) {
      actions.login(credentials, from);
    }
  }

  render() {
    const { credentials } = this.state;

    return (
      <div className="login">
        <h1 className="sr-only">Please login to view the developer portal</h1>
        <Container>
          <div className="login__box">
            <Heading level={2} className="login__heading">
              Log in to the Developer Portal
            </Heading>

            <div className="login__form">
              <form method="POST" action="" onSubmit={this.handleSubmit}>
                <Fieldset
                  name="email"
                  label="Email"
                  type="email"
                  value={credentials.email}
                  onChange={this.handleChange}
                />

                <Fieldset
                  name="password"
                  label="Password"
                  type="password"
                  value={credentials.password}
                  onChange={this.handleChange}
                />

                <Button
                  type="submit"
                  text="Login"
                  className="login__button"
                />
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
    from: PropTypes.string,
  }),
  actions: PropTypes.shape(),
};

Login.defaultProps = {
  location: null,
  actions: null,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as appsActions from '../../../actions/appsActions';

import ModalPortal from '../../atoms/ModalPortal/ModalPortal';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Fieldset from '../Fieldset/Fieldset';

import './EditApp.scss';

class EditApp extends Component {
  constructor(props) {
    super(props);

    const { app } = this.props;

    this.state = {
      data: {
        name: app.name,
        logo: app.logo,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { data } = this.state;
    data[name] = value;

    this.setState({
      data,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { hideModal, actions, app } = this.props;
    const { data } = this.state;

    hideModal();
    actions.editApp(app.id, data);
  }

  render() {
    const { app, hideModal } = this.props;
    const { data } = this.state;
    const { name, logo } = data;
    return (
      <ModalPortal>
        <div className="modal__box">
          <div className="modal__content edit">
            <Heading level={3}>
              Are you sure you want to edit {app.name}?
            </Heading>

            <form method="PUT" action="" className="edit__form" onSubmit={this.handleSubmit}>
              <Fieldset
                label="Name"
                name="name"
                value={name}
                type="text"
                onChange={this.handleChange}
              />

              <Fieldset
                label="Logo"
                name="logo"
                value={logo}
                type="text"
                onChange={this.handleChange}
              />

              <div className="edit__buttons">
                <Button
                  onClick={hideModal}
                  text="Discard updates"
                  className="edit__button"
                />

                <Button
                  type="submit"
                  text="Save updates"
                  className="edit__button"
                />
              </div>
            </form>

          </div>
        </div>
      </ModalPortal>
    );
  }
}

EditApp.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }),
  hideModal: PropTypes.func,
  actions: PropTypes.shape(),
};

EditApp.defaultProps = {
  app: null,
  hideModal: () => {},
  actions: null,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appsActions, dispatch),
});

export default connect(null, mapDispatchToProps)(EditApp);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditApp from '../../molecules/EditApp/EditApp';
import Image from '../../atoms/Image/Image';
import Button from '../../atoms/Button/Button';
import Links from '../../atoms/Links/Links';
import Heading from '../../atoms/Heading/Heading';

import './ListApp.scss';

class ListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { app } = this.props;
    const { showModal } = this.state;

    return (
      app && (
        <div className="application">
          {app.name
            && (
              <Heading level={2} className="application__heading">
                {app.name}
              </Heading>
            )
          }
          {app.logo && <Image src={app.logo} alt={app.name} className="application__image" /> }

          <div className="application__links">
            <Button className="application__link" onClick={this.showModal} text="Edit App" />
            <Links className="application__link" location={`apps/${app.id}/users`} text="View users" />
          </div>
          { showModal
            && <EditApp app={app} hideModal={this.hideModal} />
          }
        </div>
      )
    );
  }
}

ListApp.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    logo: PropTypes.string,
  }),
};

ListApp.defaultProps = {
  app: null,
};

export default ListApp;

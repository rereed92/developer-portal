import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as appsActions from '../../../actions/appsActions';

import ListApp from '../../organisms/ListApp/ListApp';
import Container from '../../atoms/Container/Container';
import Heading from '../../atoms/Heading/Heading';
import List from '../../atoms/List/List';

import './Apps.scss';

class Apps extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.loadApps();
  }

  render() {
    const { apps } = this.props;

    return (
      <div className="apps">
        <Container>
          <Heading level={1}>
            Apps
          </Heading>

          {apps
            ? (
              <List isUnstyled className="row apps">
                {apps.map(app => (
                  <li key={app.id} className="col-12 col-md-6 col-lg-4">
                    <ListApp app={app} />
                  </li>
                ))}
              </List>
            )
            : <p>Loading Apps</p>
          }
        </Container>
      </div>
    );
  }
}

Apps.propTypes = {
  actions: PropTypes.shape(),
  apps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    logo: PropTypes.string,
  })),
};

Apps.defaultProps = {
  actions: null,
  apps: null,
};

const mapStateToProps = state => ({
  apps: state.appsReducers,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps);

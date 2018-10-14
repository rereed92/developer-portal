import { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ModalPortal.scss';

const modalRoot = document.getElementById('modal-root');

class ModalPortal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.el.className = 'modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return createPortal(
      children,
      this.el,
    );
  }
}

ModalPortal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ModalPortal.defaultProps = {
  children: null,
};

export default connect()(ModalPortal);

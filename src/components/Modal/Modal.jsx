import { Component } from 'react';
import modalCss from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleESC);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleESC);
  };

  handleESC = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <>
        <div className={modalCss.Overlay} onClick={this.props.closeModal}>
          <div className={modalCss.Modal}>
            <img src={this.props.imageModal} alt={this.props.tagModal} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

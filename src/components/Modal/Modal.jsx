import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import modalStyles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';



function Modal({ children, onClose, title = "" }) {

  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEsc);

    return () => document.removeEventListener('keydown', closeByEsc);
  }, []);



  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modalContainer}>
          <div className={`${modalStyles.titleButtonGroup} pt-10 pl-10 pr-10`}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <button className={`${modalStyles.closeButton}`} onClick={onClose}>
              <CloseIcon type="primary" />
            </button>
          </div>
          {children}
        </div>
        <ModalOverlay onClick={onClose} />
      </>
    ), document.getElementById('react-modals'));
}



Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}



export default Modal;

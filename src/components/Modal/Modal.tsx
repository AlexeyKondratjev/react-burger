import React, { FC } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { TModalComponent } from '../../services/types/data';



const Modal: FC<TModalComponent> = ({ children, onClose, title = "" }) => {

  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
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
    ), document.getElementById('react-modals') as HTMLElement);
}


export default Modal;

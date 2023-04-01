import React, { FC } from 'react';
import { TModalOverlayComponent } from '../../services/types/data';
import modalOverlayStyles from './ModalOverlay.module.css';



const ModalOverlay: FC<TModalOverlayComponent> = ({onClick}) => {
  return (
    <div className={modalOverlayStyles.overlay} onClick={onClick}>
    </div>
  );
}


export default ModalOverlay;

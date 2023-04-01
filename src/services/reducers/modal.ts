import { SET_MODAL, RESET_MODAL } from '../actions/action-types/modal';
import { TModalActions } from '../types/actions';
import { TModal } from '../types/data';


export type TModalState = {
  isOpened: boolean,
  content: TModal
}

const initialState: TModalState = {
  isOpened: false,
  content: ''
};



export const modalReducer = (state = initialState, action: TModalActions): TModalState => {
  switch (action.type) {
    case SET_MODAL: {
      return {
        isOpened: true,
        content: action.content
      }
    }
    case RESET_MODAL: {
      return initialState;
    }
    default: {
      return state;
    }
  };
};

import { SET_MODAL, RESET_MODAL } from '../actions/modal';


const initialState = {
  isOpened: false,
  content: ''
};



export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL: {
      return {
        isOpened: true,
        content: action.payload.content
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

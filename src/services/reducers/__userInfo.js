/* import {
  CHANGE_USER_INFO_NAME,
  CHANGE_USER_INFO_EMAIL,
  CHANGE_USER_INFO_PASSWORD
} from '../actions/userInfo';

const initialState = {
  name: '',
  email: '',
  password: ''
};



export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_INFO_NAME: {
      return {
        ...state,
        name: action.payload
      }
    }
    case CHANGE_USER_INFO_EMAIL: {
      return {
        ...state,
        email: action.payload
      }
    }
    case CHANGE_USER_INFO_PASSWORD: {
      return {
        ...state,
        password: action.payload
      }
    }
    default: {
      return state;
    }
  };
};
 */

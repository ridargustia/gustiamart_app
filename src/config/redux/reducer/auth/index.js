import {
  CHANGE_LOADING,
  CHANGE_LOGIN,
  CHANGE_USER,
  CHANGE_ERROR,
} from '../../action/authAction';

const initState = {
  isLoading: false,
  isLogin: false,
  user: {},
  error: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };

    case CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.value,
      };

    case CHANGE_USER:
      return {
        ...state,
        user: action.value,
      };

    case CHANGE_ERROR:
      return {
        ...state,
        error: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
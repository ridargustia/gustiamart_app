const initState = {
  isLogin: false,
  isLoading: false,
  user: {},
};

const reducer = (state = initState, action) => {
  if (action.type === 'CHANGE_LOGIN') {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  if (action.type === 'CHANGE_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      user: action.value,
    };
  }

  return state;
};

export default reducer;
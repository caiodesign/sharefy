export const types = {
  LOAD_AUTH: 'LOAD_AUTH',
  RECEIVE_USER_FROM_LOGIN: 'RECEIVE_USER_FROM_LOGIN',
  SET_LOADERS: 'AUTH/SET_LOADERS',
  SET_SUCCESS: 'AUTH/SET_SUCCESS',
  SET_ERRORS: 'AUTH/SET_ERRORS',
};

export const actions = {
  checkLogin: dispatch => dispatch({ type: types.LOAD_AUTH }),
  getUser: user => ({ type: types.RECEIVE_USER_FROM_LOGIN, user }),
  setSuccess: success => ({ type: types.SET_SUCCESS, success }),
  setErrors: error => ({ type: types.SET_ERRORS, error }),
  setLoaders: isLoading => ({ type: types.SET_LOADERS, isLoading }),
};

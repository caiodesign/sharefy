import createReducer from '../createReducer'

export const initialState = {
  loader: {
    success: false,
    error: false,
  }
}

const loader = {
  [types.SET_ERRORS]: (state, { errors }) =>
    ({ ...state, errors: { ...state.loader, ...errors } }),
  [types.SET_SUCCESS]: (state, { success }) =>
    ({ ...state, success: { ...state.loader, ...success } }),
}

export default createReducer(initialState, loader)

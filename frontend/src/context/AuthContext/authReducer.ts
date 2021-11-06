import { AuthState } from './AuthContext';

export enum TYPES {
  USER_LOADED = 1,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
}

export type AuthAction = { type: TYPES; payload?: any };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case TYPES.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case TYPES.REGISTER_SUCCESS:
    case TYPES.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state
      };
    case TYPES.REGISTER_FAIL:
    case TYPES.AUTH_ERROR:
    case TYPES.LOGIN_FAIL:
    case TYPES.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload
      };
    case TYPES.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;

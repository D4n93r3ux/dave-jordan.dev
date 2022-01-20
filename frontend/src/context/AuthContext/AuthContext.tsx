import createSafeContext from '../../utils/createSafeContext';
import authReducer from './authReducer';
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import addTokenToGlobalHeaders from '../../utils/addTokenToGlobalHeaders';
import { TYPES } from './authReducer';

export type AuthState = {
  isLoading: boolean;
  user: {
    id: string;
    email: string;
  } | null;
  error: unknown | null;
};

export type AuthContextValue = AuthState & {
  signUp(formData: any): void;
  signIn(formData: any): void;
  signOut(): void;
};

const [useAuthContext, AuthContextProviderComponent] =
  createSafeContext<AuthContextValue>();

const AuthContextProvider: React.FC = ({ children }) => {
  const initialState: AuthState = {
    isLoading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const validateTokenAndGetUserData = async () => {
    if (localStorage.token) {
      addTokenToGlobalHeaders(localStorage.token);
    }

    try {
      const res = await axios.get('/users');

      dispatch({
        type: TYPES.USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: TYPES.AUTH_ERROR });
    }
  };

  useEffect(() => {
    validateTokenAndGetUserData();
  }, []);

  const signUp = async (formData: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/users/signUp', formData, config);

      dispatch({
        type: TYPES.REGISTER_SUCCESS,
        payload: res.data
      });

      validateTokenAndGetUserData();
    } catch (err: any) {
      console.log('ERROR');
      dispatch({
        type: TYPES.REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const signIn = async (formData: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/users/signIn', formData, config);

      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        payload: res.data
      });

      validateTokenAndGetUserData();
    } catch (err: any) {
      dispatch({
        type: TYPES.LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const signOut = () => {
    dispatch({
      type: TYPES.LOGOUT
    });
  };

  const value = {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error,
    signUp,
    signIn,
    signOut
  };

  return (
    <AuthContextProviderComponent value={value}>
      {children}
    </AuthContextProviderComponent>
  );
};

export { useAuthContext, AuthContextProvider };

import { createReducer, on } from '@ngrx/store';
import * as loginActions from '../actions/login.action';
import * as signupActions from '../actions/signup.action';

export interface AuthState {
  email: string;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
  error: any;
  token: string;
}

export const initialState: AuthState = {
  email: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
  error: null,
  token: ''
};

export const authReducer = createReducer(
  initialState,
  on(loginActions.login, (state) => ({...state, isLoading: true})),
  on(loginActions.loginSuccess, (state, result) => ({...state, email: result.email, token: result.token, isLoading: false, isLoadingSuccess: true})),
  on(loginActions.loginFailure, (state, error) => ({...state, isLoading: false, isLoadingSuccess: false, isLoadingFailure: true, error: error, token: ''})),
  on(signupActions.signup, (state, {email}) => ({...state, email, isLoading: true})),
  on(signupActions.signupSuccess, (state, result) => ({...state, email: result.email, token: result.token, isLoading: false, isLoadingSuccess: true})),
  on(signupActions.signupFailure, (state, error) => ({...state, isLoading: false, isLoadingSuccess: false, isLoadingFailure: true, error: error, token: ''})),
);

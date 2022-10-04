import { createAction, props } from '@ngrx/store';

export const LOGIN = '[Login Page] Login';
export const LOGIN_SUCCESS = '[Login Page] Login Success';
export const LOGIN_FAILURE = '[Login Page] Login Failure';

export const login = createAction(
  LOGIN,
  props<{email: string; password: string;}>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<any>()
)

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<any>()
)

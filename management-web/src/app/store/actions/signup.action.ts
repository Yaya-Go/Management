import { createAction, props } from '@ngrx/store';

export const SIGNUP = '[SignUp Page] Signup';
export const SIGNUP_SUCCESS = '[SignUp Page] Signup Success';
export const SIGNUP_FAILURE = '[SignUp Page] Signup Failure';

export const signup = createAction(
  SIGNUP,
  props<{email: string; password: string;}>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<any>()
)

export const signupFailure = createAction(
  SIGNUP_FAILURE,
  props<any>()
)

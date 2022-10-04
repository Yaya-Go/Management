import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getEmail = createSelector(selectAuthState, (state) => state.email);
export const isLoading = createSelector(selectAuthState, (state) => state.isLoading);
export const getError = createSelector(selectAuthState, (state) => state.error);

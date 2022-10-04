import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>('app');

export const getSummary = createSelector(selectAppState, (state) => ({
  accountSize: state.accountSize,
  sellerSize: state.sellerSize,
  cateSize: state.cateSize,
  transSize: state.transSize,
  incomeSize: state.incomeSize,
  transTotal: state.transTotal,
  incomeTotal: state.incomeTotal
}));
export const isLoading = createSelector(selectAppState, (state) => state.isLoading);
export const getError = createSelector(selectAppState, (state) => state.error);
export const getAccounts = createSelector(selectAppState, (state) => state.accList);
export const getCategories = createSelector(selectAppState, (state) => state.cateList);

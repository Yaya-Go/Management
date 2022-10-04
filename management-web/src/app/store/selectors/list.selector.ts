import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from '../reducers/list.reducer';

export const selectListState = createFeatureSelector<fromList.ListState>('list');

export const getTransactions = createSelector(selectListState, (state) => state.transactions);
export const getSellers = createSelector(selectListState, (state) => state.sellers);
export const getIncome = createSelector(selectListState, (state) => state.income);
export const isLoading = createSelector(selectListState, (state) => state.isLoading);
export const getError = createSelector(selectListState, (state) => state.error);

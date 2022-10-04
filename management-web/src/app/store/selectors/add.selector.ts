import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdd from '../reducers/add.reducer';

export const selectAddState = createFeatureSelector<fromAdd.AddState>('add');

export const getItem = createSelector(selectAddState, (state) => state.item);
export const isLoading = createSelector(selectAddState, (state) => state.isLoading);
export const getError = createSelector(selectAddState, (state) => state.error);

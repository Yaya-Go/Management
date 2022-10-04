import { createReducer, on } from '@ngrx/store';
import * as addActions from '../actions/add.action';

export interface AddState {
  item: any;
  isLoading: boolean;
  isAddSuccess: boolean;
  isAddFailure: boolean;
  error: any;
}

export const initialState: AddState = {
  item: '',
  isLoading: false,
  isAddSuccess: false,
  isAddFailure: false,
  error: null
};

export const addReducer = createReducer(
  initialState,
  on(addActions.addItem, (state) => ({...state, isLoading: true})),
  on(addActions.addSuccess, (state, item) => ({...state, item, isLoading: false, isAddSuccess: true})),
  on(addActions.addFailure, (state, error) => ({...state, isLoading: false, isAddSuccess: false, isAddFailure: true, error: error}))
);

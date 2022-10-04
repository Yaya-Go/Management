import { createReducer, on } from '@ngrx/store';
import * as listActions from '../actions/list.action';
import * as deleteActions from '../actions/delete.action';
import { TYPES } from 'src/app/app-config.model';

export interface ListState {
  transactions: any[];
  sellers: any[];
  income: any[];
  items: any[];
  isLoading: boolean;
  isListSuccess: boolean;
  isListFailure: boolean;
  isDeleteSuccess: boolean;
  isDeleteFailure: boolean
  error: any;
}

export const initialState: ListState = {
  transactions: [],
  sellers: [],
  income: [],
  items: [],
  isLoading: false,
  isListSuccess: false,
  isListFailure: false,
  isDeleteSuccess: false,
  isDeleteFailure: false,
  error: null
};

export const listReducer = createReducer(
  initialState,
  on(listActions.listItem, (state) => ({...state, isLoading: true})),
  on(listActions.listSuccess, (state, response) => ({...state, [response.itemType]: response.data, isLoading: false, isAddSuccess: true})),
  on(listActions.listFailure, (state, error) => ({...state, isLoading: false, isAddSuccess: false, isAddFailure: true, error: error})),

  on(deleteActions.deleteItem, (state) => ({...state, isLoading: true})),
  on(deleteActions.deleteSuccess, (state, response) => {
    const clonedState = Object.assign({}, state);
    switch (response.itemType) {
      case TYPES.T:
        clonedState.transactions = clonedState.transactions.filter(t => t.id !== response.id);
        break;
      case TYPES.S:
        clonedState.sellers = clonedState.sellers.filter(s => s.id !== response.id);
        break;
      case TYPES.IN:
        clonedState.income = clonedState.income.filter(i => i.id !== response.id);
        break;
      case TYPES.I:
        clonedState.items = clonedState.items.filter(i => i.id !== response.id);
        break;
      default:
        break;
    }
    clonedState.isLoading = false;
    clonedState.isDeleteSuccess = true;
    return clonedState;
  }),
  on(deleteActions.deleteFailure, (state, error) => ({...state, isLoading: false, isAddSuccess: false, isAddFailure: true, error: error}))
);

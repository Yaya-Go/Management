import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.action';

export interface AppState {
  accountSize: number;
  sellerSize: number;
  cateSize: number;
  transSize: number;
  incomeSize: number;
  transTotal: number;
  incomeTotal: number;
  cateList: any[];
  accList: any[];
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  error: any;
}

export const initialState: AppState = {
  accountSize: 0,
  sellerSize: 0,
  cateSize: 0,
  transSize: 0,
  incomeSize: 0,
  transTotal: 0,
  incomeTotal: 0,
  cateList: [],
  accList: [],
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  error: null
};

export const addReducer = createReducer(
  initialState,
  on(appActions.summary, (state) => ({...state, isLoading: true})),
  on(appActions.summarySuccess, (state, {response}) => ({...state, ...response, isLoading: false, isSuccess: true})),
  on(appActions.summaryFailure, (state, error) => ({...state, isLoading: false, isSuccess: false, isFailure: true, error: error})),
  
  on(appActions.listAccount, (state) => ({...state, isLoading: true})),
  on(appActions.listAccountSuccess, (state, {response}) => ({...state, accList: response, isLoading: false, isSuccess: true})),
  on(appActions.listAccountFailure, (state, error) => ({...state, isLoading: false, isSuccess: false, isFailure: true, error: error})),
  on(appActions.listCategory, (state) => ({...state, isLoading: true})),
  on(appActions.listCategorySuccess, (state, {response}) => ({...state, cateList: response, isLoading: false, isSuccess: true})),
  on(appActions.listCategoryFailure, (state, error) => ({...state, isLoading: false, isSuccess: false, isFailure: true, error: error})),
  
  on(appActions.deleteAccount, (state) => ({...state, isLoading: true})),
  on(appActions.deleteAccountSuccess, (state, {id}) => ({...state, accList: (state.accList || []).filter(a => a.id !== id), isLoading: false, isSuccess: true})),
  on(appActions.deleteAccountFailure, (state, error) => ({...state, isLoading: false, isSuccess: false, isFailure: true, error: error})),
  on(appActions.deleteCategory, (state) => ({...state, isLoading: true})),
  on(appActions.deleteCategorySuccess, (state, {id}) => ({...state, cateList: (state.cateList || []).filter(c => c.id !== id), isLoading: false, isSuccess: true})),
  on(appActions.deleteCategoryFailure, (state, error) => ({...state, isLoading: false, isSuccess: false, isFailure: true, error: error}))
);

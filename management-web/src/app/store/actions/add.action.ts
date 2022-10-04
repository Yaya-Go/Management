import { createAction, props } from '@ngrx/store';
import { AddModel } from 'src/app/app-config.model';

export const ADD = '[Add] Add Item';
export const ADD_SUCCESS = '[Add] Success';
export const ADD_FAILURE = '[Add] Failure';

export const addItem = createAction(
  ADD,
  (payload: {itemType: string, item: AddModel}) => ({ payload })
);

export const addSuccess = createAction(
  ADD_SUCCESS,
  props<{itemType: string; data: any;}>()
)

export const addFailure = createAction(
  ADD_FAILURE,
  props<{itemType: string; error: any;}>()
)

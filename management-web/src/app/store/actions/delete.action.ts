import { createAction, props } from '@ngrx/store';

export const DELETE = '[Delete] Delete Item';
export const DELETE_SUCCESS = '[Delete] Success';
export const DELETE_FAILURE = '[Delete] Failure';

export const deleteItem = createAction(
  DELETE,
  (payload: {itemType: string, id: string}) => ({ payload })
);

export const deleteSuccess = createAction(
  DELETE_SUCCESS,
  props<{itemType: string; id: string; response: any;}>()
)

export const deleteFailure = createAction(
  DELETE_FAILURE,
  props<{itemType: string; error: any;}>()
)

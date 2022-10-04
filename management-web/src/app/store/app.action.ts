import { createAction, props } from '@ngrx/store';

export const SUMMARY = '[Home] Summary';
export const SUMMARY_SUCCESS = '[Home] Summary Success';
export const SUMMARY_FAILURE = '[Home] Summary Failure';
export const LIST_ACCOUNT = '[List] List Account';
export const LIST_ACCOUNT_SUCCESS = '[List] List Account Success';
export const LIST_ACCOUNT_FAILURE = '[List] List Account Failure';
export const LIST_CATEGORY = '[List] List Category';
export const LIST_CATEGORY_SUCCESS = '[List] List Category Success';
export const LIST_CATEGORY_FAILURE = '[List] List Category Failure';
export const DELETE_ACCOUNT = '[Delete] Delete Account';
export const DELETE_ACCOUNT_SUCCESS = '[Delete] Delete Account Success';
export const DELETE_ACCOUNT_FAILURE = '[Delete] Delete Account Failure';
export const DELETE_CATEGORY = '[Delete] Delete Category';
export const DELETE_CATEGORY_SUCCESS = '[Delete] Delete Category Success';
export const DELETE_CATEGORY_FAILURE = '[Delete] Delete Category Failure';

export const summary = createAction(
  SUMMARY,
  (year?: number) => ({ year })
);

export const summarySuccess = createAction(
  SUMMARY_SUCCESS,
  props<{response: any;}>()
);

export const summaryFailure = createAction(
  SUMMARY_FAILURE,
  props<{error: any;}>()
);

export const listAccount = createAction(
  LIST_ACCOUNT
);

export const listAccountSuccess = createAction(
  LIST_ACCOUNT_SUCCESS,
  props<{response: any;}>()
);

export const listAccountFailure = createAction(
  LIST_ACCOUNT_FAILURE,
  props<{error: any;}>()
);

export const listCategory = createAction(
  LIST_CATEGORY
);

export const listCategorySuccess = createAction(
  LIST_CATEGORY_SUCCESS,
  props<{response: any;}>()
);

export const listCategoryFailure = createAction(
  LIST_CATEGORY_FAILURE,
  props<{error: any;}>()
);

export const deleteAccount = createAction(
  DELETE_ACCOUNT,
  (id: string) => ({ id })
);

export const deleteAccountSuccess = createAction(
  LIST_ACCOUNT_SUCCESS,
  props<{response: any; id: string;}>()
);

export const deleteAccountFailure = createAction(
  LIST_ACCOUNT_FAILURE,
  props<{error: any;}>()
);

export const deleteCategory = createAction(
  LIST_CATEGORY,
  (id: string) => ({ id })
);

export const deleteCategorySuccess = createAction(
  LIST_CATEGORY_SUCCESS,
  props<{response: any; id: string;}>()
);

export const deleteCategoryFailure = createAction(
  LIST_CATEGORY_FAILURE,
  props<{error: any;}>()
);

import { createAction, props } from '@ngrx/store';

export const LIST = '[LIST] List Item';
export const LIST_SUCCESS = '[LIST] Success';
export const LIST_FAILURE = '[LIST] Failure';
export const LIST_ITEM_BY_TRANS = '[List] List Item By Transaction';
export const LIST_ITEM_BY_SELLER = '[List] List Item By Seller';

export const listItem = createAction(
  LIST,
  (itemType: string) => ({ itemType })
);

export const listSuccess = createAction(
  LIST_SUCCESS,
  props<{itemType: string; data: any;}>()
);

export const listFailure = createAction(
  LIST_FAILURE,
  props<{itemType: string; error: any;}>()
);

export const listItemByTrans = createAction(
  LIST_ITEM_BY_TRANS,
  (transId: string) => ({ transId })
);

export const listItemBySeller = createAction(
  LIST_ITEM_BY_SELLER,
  (sellerId: string) => ({ sellerId })
);

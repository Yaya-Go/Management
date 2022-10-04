import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import * as ListActions from '../actions/list.action';
import { TYPES } from 'src/app/app-config.model';

@Injectable()
export class ListEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  list$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.listItem),
      exhaustMap(action =>
        this.appService.list(action.itemType).pipe(
          map(response => ListActions.listSuccess({itemType: action.itemType, data: response})),
          catchError((error: any) => of(ListActions.listFailure({itemType: action.itemType, error: error}))))
      )
    )
  );

  listItemByTrans$ =createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.listItemByTrans),
      exhaustMap(action =>
        this.appService.listItemByTrans(action.transId).pipe(
          map(response => ListActions.listSuccess({itemType: TYPES.I, data: response})),
          catchError((error: any) => of(ListActions.listFailure({itemType: TYPES.I, error: error}))))
      )
    )
  );

  listItemBySeller$ =createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.listItemBySeller),
      exhaustMap(action =>
        this.appService.listItemByTrans(action.sellerId).pipe(
          map(response => ListActions.listSuccess({itemType: TYPES.I, data: response})),
          catchError((error: any) => of(ListActions.listFailure({itemType: TYPES.I, error: error}))))
      )
    )
  );

}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import * as AppActions from './app.action';
import { TYPES } from '../app-config.model';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  summary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.summary),
      exhaustMap(action =>
        this.appService.summary(action.year).pipe(
          map(response => AppActions.summarySuccess({ response })),
          catchError((error: any) => of(AppActions.summaryFailure(error))))
      )
    )
  );

  listAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.listAccount),
      exhaustMap(() =>
        this.appService.list(TYPES.A).pipe(
          map(response => AppActions.listAccountSuccess({response})),
          catchError((error: any) => of(AppActions.listAccountFailure({error})))
        )
      )
    )
  );

  listCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.listCategory),
      exhaustMap(() =>
        this.appService.list(TYPES.C).pipe(
          map(response => AppActions.listCategorySuccess({response})),
          catchError((error: any) => of(AppActions.listCategoryFailure({error})))
        )
      )
    )
  );

  deleteAccount$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AppActions.deleteAccount),
      exhaustMap((action) => 
        this.appService.delete(TYPES.A, action.id).pipe(
          map(response => AppActions.deleteAccountSuccess({response, id: action.id})),
          catchError((error: any) => of(AppActions.deleteAccountFailure({error})))
        )
      )
    )
  )

  deleteCategory$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AppActions.deleteCategory),
      exhaustMap((action) => 
        this.appService.delete(TYPES.C, action.id).pipe(
          map(response => AppActions.deleteCategorySuccess({response, id: action.id})),
          catchError((error: any) => of(AppActions.deleteCategoryFailure({error})))
        )
      )
    )
  )
}

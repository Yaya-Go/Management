import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import * as AddActions from '../actions/add.action';

@Injectable()
export class AddEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  itemAdd$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddActions.addItem),
      map(action => action.payload),
      exhaustMap(payload =>
        this.appService.add(payload.itemType, payload.item).pipe(
          map(response => AddActions.addSuccess({itemType: payload.itemType, data: response})),
          catchError((error: any) => of(AddActions.addFailure(error))))
      )
    )
  );

}

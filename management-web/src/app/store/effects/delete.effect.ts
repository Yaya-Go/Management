import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import * as DeleteActions from '../actions/delete.action';

@Injectable()
export class DeleteEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  itemDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteActions.deleteItem),
      map(action => action.payload),
      exhaustMap(payload =>
        this.appService.delete(payload.itemType, payload.id).pipe(
          map(response => DeleteActions.deleteSuccess({itemType: payload.itemType, id: payload.id, response})),
          catchError((error: any) => of(DeleteActions.deleteFailure(error))))
      )
    )
  );

}

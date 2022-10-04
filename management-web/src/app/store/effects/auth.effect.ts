import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import * as LoginActions from '../actions/login.action';
import * as SignupActions from '../actions/signup.action';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService,
    private router: Router
  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap(action =>
        this.appService.login(action.email, action.password).pipe(
          map((response: any) => {
            localStorage.setItem('token', response.token);
            this.router.navigateByUrl('/home');
            return LoginActions.loginSuccess(response);
          }),
          catchError((error: any) => of(LoginActions.loginFailure(error))))
      )
    )
  );

  userSignup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignupActions.signup),
      exhaustMap(action =>
        this.appService.register(action.email, action.password).pipe(
          map((response: any) => {
            localStorage.setItem('token', response.token);
            this.router.navigateByUrl('/home');
            return SignupActions.signupSuccess(response);
          }),
          catchError((error: any) => of(SignupActions.signupFailure(error))))
      )
    )
  );

}

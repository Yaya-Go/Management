import { ActionReducerMap } from '@ngrx/store';
import * as fromReducer from './reducers';
import * as fromEffect from './effects';
import * as appReducer from './app.reducer';
import * as appEffect from './app.effect';

export interface AppState {
  app: appReducer.AppState,
  auth: fromReducer.auth.AuthState,
  add: fromReducer.add.AddState,
  list: fromReducer.list.ListState
};

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer.addReducer,
  auth: fromReducer.auth.authReducer,
  add: fromReducer.add.addReducer,
  list: fromReducer.list.listReducer
};

export const effects = [
  appEffect.AppEffects,
  fromEffect.auth.UserEffects,
  fromEffect.add.AddEffects,
  fromEffect.list.ListEffects
];

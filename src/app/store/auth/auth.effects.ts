import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}
}

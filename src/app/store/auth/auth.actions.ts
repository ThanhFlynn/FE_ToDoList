import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AUTH] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[AUTH] Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[AUTH] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[AUTH] Logout');

export const checkAuthStatus = createAction('[AUTH] Check Auth Status');

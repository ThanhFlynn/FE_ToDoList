import { createAction, props } from '@ngrx/store';

/**
 * Action gọi login
 */
export const loginAction = createAction(
  '[Auth] Login',
  props<{ userName: string; password: string }>()
);

/**
 * Action login thành công
 */
export const loginActionSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; tokenType: string; expiredAt: Date }>()
);

/**
 * Action login lỗi
 */
export const loginActionFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error }>()
);

export const logout = createAction('[Auth] Logout');

export const autoLogout = createAction('[Auth Auto Logout');

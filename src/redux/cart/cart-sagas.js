import {takeLatest, put, call, all} from 'redux-saga/effects';

import {clearCart} from './cart.actions';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignout() {
    yield put(clearCart());
};

export function* onsignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout)
};

export function* cartSagas() {
    yield all([
        call(onsignOutSuccess)
    ]);
};
import { takeLatest, put, call, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionsTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchColectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchColectionsAsync
    );
};

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
};
import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = erroreMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: erroreMessage
});

/** handling fetch call using redux thunk
 
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshop => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshop);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};
*/


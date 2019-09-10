import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null
};

export const shopReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECtIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
};
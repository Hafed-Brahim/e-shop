import CartActionTypes from './cart.types';

 export const toggelCartHidden = () => ({
    type: CartActionTypes.TOGGEL_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

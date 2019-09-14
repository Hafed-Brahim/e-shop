import CartActionTypes from './cart.types';

 export const toggelCartHidden = () => ({
    type: CartActionTypes.TOGGEL_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const decreaseQuantity = item => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEARE_CART
});

import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';
import {removeItemFromCart, decreaseQuantity} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []    
}

const Cartreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGEL_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEARE_CART: 
        return {
            ...state,
            cartItems: []
        }
        default:
            return state;  
    }
};

export default Cartreducer;
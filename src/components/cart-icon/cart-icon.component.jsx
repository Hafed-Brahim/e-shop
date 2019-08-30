import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggelCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggelCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
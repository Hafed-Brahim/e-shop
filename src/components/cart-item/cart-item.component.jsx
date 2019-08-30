import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;

    return (
        <div className = 'cart-item'>
            <img src = {imageUrl} alt = 'item'></img>

            <div className = 'info'>
                <span className = 'name'>{name}</span>
                <span>{quantity} x {price} $</span>
            </div>

        </div>
    )
}

export default CartItem;
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';    

import {toggelCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                cartItems.length
                ? (cartItems
                        .map((item) => (
                                <CartItem key = {item.id} cartItem = {item} />
                            )
                        )
                    )
                : <span className = 'empty-message'>your cart is empty</span>
            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggelCartHidden());
            }}
        >Checkout
        </CustomButton>
    </div>
)

const mapstateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapstateToProps )(CartDropdown));
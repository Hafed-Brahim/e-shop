import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                <span>Product</span> 
            </div>
            <div className = 'header-block'>
                <span>Description</span> 
            </div>
            <div className = 'header-block'>
                <span>Quantity</span> 
            </div>
            <div className = 'header-block'>
                <span>Price</span> 
            </div>
            <div className = 'header-block'>
                <span>Remove</span> 
            </div>
        </div>

        {
            cartItems.map(item => 
                <CheckoutItem key = {item.id} item = {item}/> 
            )
        }

        <div className = 'total'>
           Total: {total} $
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
});

export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_0bgCSMLKHxubYCmxLtpVfeRc00BHPqMiJQ';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
};

    return (
        <StripeCheckout
            label="Pay Now"
            name='e-shop'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is ${price} $`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
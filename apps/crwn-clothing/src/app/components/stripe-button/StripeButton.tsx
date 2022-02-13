import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }: any) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KSez3LK2S3mOPa0Y8ahjtD4U3225MUNebhwIqkLeRoXxGXZ9AxzuY3vIYqFEqMlrKfEFnT0BGE7GkXFuIRM13ax00FvE8ulJ9';

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

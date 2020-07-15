import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  console.log(token);
  alert('Payment successful.');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H5G4DEQV0643woX6hiUOhiCS04s2K5vmuonCnTdqYcLWP0lVwBYqThJAC2Pfqk2T7b4md8u8iNxKYRf4BJtJfGu00Pubye7BH';
  
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image = 'https://sendeyo.com/up/d/f3eb2117da'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
}

export default StripeCheckoutButton;
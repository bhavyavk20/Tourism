import React, { useState } from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

export const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      setLoading(false);
    } else {
      setPaymentError(null);
      // Send payment method to your server to complete the payment
      const response = await axios.post(`http://localhost:4003/payment`, {
        payment_method_id: paymentMethod.id,
        amount: 1000, // Example amount in cents
        currency: 'usd', // Example currency
      });

      if (response.data.success) {
        setPaymentSuccess('Payment successful!');
        // You can redirect or perform other actions upon successful payment
      } else {
        setPaymentError('Payment failed. Please try again.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="payment-gateway-page">
      <h2>Secure Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <CardElement id="card-element" options={{}} />
        </div>
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {paymentError && <div className="error-message">{paymentError}</div>}
      {paymentSuccess && <div className="success-message">{paymentSuccess}</div>}
    </div>
  );
};



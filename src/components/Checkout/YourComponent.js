import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Function to authenticate with Paymob and get the auth token
  const authenticatePaymob = async () => {
    try {
      const apiKey = 'ZXlKaGJHY2lPaUpJVXpVe...'; // Replace with your actual API key

      const response = await axios.post('https://pakistan.paymob.com/api/auth/tokens', {
        api_key: apiKey,
      });

      const authToken = response.data.token;
      console.log('Authentication successful. Auth Token:', authToken);

      return authToken;
    } catch (error) {
      console.error('Authentication failed:', error.message);
      throw new Error('Authentication failed');
    }
  };

  // Function to register an order with Paymob
  const registerOrder = async (authToken) => {
    try {
      const orderData = {
        auth_token: authToken,
        // Your order registration data goes here
      };

      const response = await axios.post('https://pakistan.paymob.com/api/ecommerce/orders', orderData);

      const orderId = response.data.id;
      console.log('Order registered successfully. Order ID:', orderId);

      return orderId;
    } catch (error) {
      console.error('Order registration failed:', error.message);
      throw new Error('Order registration failed');
    }
  };

  // Function to request a payment key from Paymob
  const requestPaymentKey = async (authToken, orderId) => {
    try {
      const paymentKeyRequestData = {
        auth_token: authToken,
        order_id: orderId.toString(),
        // Your payment key request data goes here
      };

      const response = await axios.post('https://pakistan.paymob.com/api/acceptance/payment_keys', paymentKeyRequestData);

      const paymentKey = response.data.token;
      console.log('Payment key obtained successfully. Payment Key:', paymentKey);

      setOrderPlaced(true); // Update state to indicate that the order has been placed
    } catch (error) {
      console.error('Payment key request failed:', error.message);
      throw new Error('Payment key request failed');
    }
  };

  // Function to handle the "Place Order" button click
  const handlePlaceOrderClick = async () => {
    try {
      // Call the authentication function to start the process
      const authToken = await authenticatePaymob();

      // Assuming you have an orderId from order registration (you might get this from the response of registerOrder)
      const orderId = await registerOrder(authToken);

      // Request payment key using the obtained order ID
      await requestPaymentKey(authToken, orderId);

      // Additional logic or UI updates after placing the order
      console.log('Order placed successfully!');
    } catch (error) {
      console.error('Failed to place the order:', error.message);
    }
  };

  return (
    <div>
      {/* Your other React components and UI elements */}
      <button onClick={handlePlaceOrderClick} disabled={orderPlaced}>
        Place Order
      </button>
      {orderPlaced && <p>Order Placed Successfully!</p>}
    </div>
  );
};

export default YourComponent;

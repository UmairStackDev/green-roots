const axios = require('axios');

const requestPaymentKey = async () => {
  const authToken = 'ZXlKaGlPaUpJVXpVeE1pSX1Y0NJmV5Sn...'; // Replace with the authentication token obtained in the previous step

  try {
    // Example payment key request data
    const paymentKeyRequestData = {
      auth_token: authToken,
      amount_cents: '100',
      expiration: 3600,
      order_id: '103',
      billing_data: {
        apartment: '803',
        email: 'claudette09@exa.com',
        floor: '42',
        first_name: 'Clifford',
        street: 'Ethan Land',
        building: '8028',
        phone_number: '+86(8)9135210487',
        shipping_method: 'PKG',
        postal_code: '01898',
        city: 'Jaskolskiburgh',
        country: 'CR',
        last_name: 'Nicolas',
        state: 'Utah',
      },
      currency: 'PKR',
      integration_id: 1,
      lock_order_when_paid: 'false',
    };

    // Make the payment key request
    const response = await axios.post('https://pakistan.paymob.com/api/acceptance/payment_keys', paymentKeyRequestData);

    // Handle the response, e.g., log the payment key
    const paymentKey = response.data.token;
    console.log('Payment key obtained successfully. Payment Key:', paymentKey);
  } catch (error) {
    // Handle errors
    console.error('Payment key request failed:', error.message);
  }
};

// Call the payment key request function
requestPaymentKey();

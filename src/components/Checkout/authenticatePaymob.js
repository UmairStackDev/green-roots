const axios = require('axios');

const authenticatePaymob = async () => {
  const apiKey = 'ZXlKaGJHY2lPaUpJVXpVe...';

  try {
    // Make an authentication request to obtain a token
    const response = await axios.post('https://pakistan.paymob.com/api/auth/tokens', {
      api_key: apiKey,
    });

    // Extract the token from the response
    const token = response.data.token;

    // Now you can use the token for other Paymob API requests
    console.log('Authentication successful. Token:', token);
  } catch (error) {
    console.error('Authentication failed:', error.message);
  }
};

// Call the authentication function
authenticatePaymob();

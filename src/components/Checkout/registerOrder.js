const axios = require('axios');

const registerOrder = async () => {
  const authToken = 'ZXlKaGlPaUpJVXpVeE1pSX1Y0NJmV5Sn...'; // Replace with the authentication token obtained in the previous step

  try {
    // Example order data
    const orderData = {
      auth_token: authToken,
      delivery_needed: 'false',
      amount_cents: '100',
      currency: 'PKR',
      merchant_order_id: 5,
      items: [
        {
          name: 'ASC1515',
          amount_cents: '500000',
          description: 'Smart Watch',
          quantity: '1',
        },
        {
          name: 'ERT6565',
          amount_cents: '200000',
          description: 'Power Bank',
          quantity: '1',
        },
      ],
      shipping_data: {
        apartment: '803',
        email: 'claudette09@exa.com',
        floor: '42',
        first_name: 'Clifford',
        street: 'Ethan Land',
        building: '8028',
        phone_number: '+86(8)9135210487',
        postal_code: '01898',
        extra_description: '8 Ram , 128 Giga',
        city: 'Jaskolskiburgh',
        country: 'CR',
        last_name: 'Nicolas',
        state: 'Utah',
      },
      shipping_details: {
        notes: 'test',
        number_of_packages: 1,
        weight: 1,
        weight_unit: 'Kilogram',
        length: 1,
        width: 1,
        height: 1,
        contents: 'product of some sorts',
      },
    };

    // Make the order registration request
    const response = await axios.post('https://pakistan.paymob.com/api/ecommerce/orders', orderData);

    // Handle the response, e.g., log the order ID
    const orderId = response.data.id;
    console.log('Order registered successfully. Order ID:', orderId);
  } catch (error) {
    // Handle errors
    console.error('Order registration failed:', error.message);
  }
};

// Call the order registration function
registerOrder();

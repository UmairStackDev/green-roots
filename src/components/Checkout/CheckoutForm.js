
import Form from 'react-bootstrap/Form';
import "./CheckoutForm.css"
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cash from "../../assets/cash.png";
import online from '../../assets/credit-card-debit-card-mastercard-payment-card-credit-card.png'
import { useNavigate } from 'react-router-dom';
import { Button, FloatingLabel, FormGroup, InputGroup } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
function CheckoutForm() {


    const [checkOutForm, setCheckOutForm] = useState({
        First_Name: '',
        Last_Name: '',
        Company_Name: '',
        Country: '',
        State: '',
        City: '',
        Delivery_Address: '',
        Postcode: '',
        Phone: '',
        Email_Address: '',
        Newsletter: false,
        Order_Notes: '',
        Street_address: '',
        Area: '',
    });


    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [companyName, setCompanyName] = useState('');
    // const [deliveryAddress, setDeliveryAddress] = useState('');
    // const [postcode, setPostCode] = useState('');
    // const [phone, setContact] = useState('');
    // const [email, setEmail] = useState('');

    const [shippingCharges, setShippingCharges] = useState(0);




    const handlePlaceOrder = () => {
        // Check the selected payment method
        if (checkOutForm.paymentMethod === 'Payment_Bank') {
            // Redirect to the online payment website
            window.location.href = 'https://example.com/online-payment'; // Replace with your actual URL
        } else if (checkOutForm.paymentMethod === 'Payment_Status') {
            // Redirect to the home page
            navigate('/home');
        }

        // Close the modal after placing the order

    };
    const { cart, totalPrice } = useSelector((state) => state.allCart);


    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Name: ${name}, Value: ${value}`);
        setCheckOutForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));



        // Set charges based on the selected radio button or area
        if (name === 'paymentMethod' || name === 'Area') {
            let calculatedCharges = 0;

            // Add logic to calculate charges based on the selected payment method
            if (name === 'paymentMethod') {
                calculatedCharges = value === 'Payment_Bank' ? 350 : (value === 'Payment_Status' ? 300 : 0);
            }

            // Add logic to calculate charges based on the selected area
            if (name === 'Area') {
                switch (value.trim().toLowerCase()) {
                    case 'clifton':
                        calculatedCharges += 250;
                        break;
                    case 'gulistan e johar':
                        calculatedCharges += 400;
                        break;
                    case 'hadeed':
                        calculatedCharges += 400;
                        break;
                    case 'baldia town':
                        calculatedCharges += 450;
                        break;
                    case 'malir':
                        calculatedCharges += 400;
                        break;
                    default:
                        console.log(`Unhandled area: ${value}`);
                        break;
                }


            }

            setShippingCharges(calculatedCharges);
        }
    };


    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // axios
        //     .post('http://localhost:8081/addCustomer', { firstName, lastName, companyName, deliveryAddress, postcode, phone, email })
        //     .then((res) => {
        //         console.log(res);

        //         // navigate('/home');
        //     })
        //     .catch((err) => console.log(err));

        // if (isCheckboxChecked) {
        //     // Process the form submission or perform other actions
        //     console.log('Form submitted successfully!');
            
        //     // Use your custom navigate function to navigate
        //     navigate('/Checkoutbank');
        // } else {
        //     alert('Please agree to the terms and conditions before submitting.');
        // }


        if (checkOutForm.paymentMethod === 'Payment_Bank') {
            // Check if the checkbox is checked before redirecting
            if (isCheckboxChecked) {
                console.log('Redirecting to /Checkoutbank');
                navigate('/Checkoutbank');
            } else {
                console.log('Checkbox not checked. Redirect aborted.');
            }
        }
        
        if (checkOutForm.paymentMethod === 'Payment_Status') {
            // Check if the checkbox is checked before redirecting
            if (isCheckboxChecked) {
                console.log('Order confirmed. Redirecting to /Home');
                alert("Your order has been successfully confirmed. Our representative will call you shortly. Thank you for your order");
                navigate('/Home');
            } else {
                console.log('Checkbox not checked. Redirect aborted.');
            }
        }
        
        console.log('Form submitted:', checkOutForm);
        
    }
    // const history = useHistory();
    const subTotal = totalPrice;
    const subTotal1 = totalPrice + shippingCharges;
    const discount = 0;   // Replace 0 with the actual discount variable if 
    const discount1 = (totalPrice * discount) / 100;
    const total = totalPrice - discount1;
    // const netTotal = totalPrice;
    const netTotal = total + shippingCharges



    return (
        <>
            <Navbar />

            <div className='checkoutform'>
                <div className="container">
                    <div className="heading_check">
                        <h1>Checkout</h1>
                    </div>
                    <div className="main_form_check">
                        <div className="container">
                            <div className="heading_">
                                <h3>
                                    Returning customer? <Link to="">Click here to login</Link> </h3>
                            </div>
                            <div className="heading_">
                                <h3>
                                    Have A Coupon? <Link to="#">Click here to enter your code</Link> </h3>
                            </div>
                            <div className="main_billing my-5">
                                <div className="billing_details">
                                    <div className="heading_details">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form_detail">
                                            <div className="form_name d-flex">
                                                <div className="name">
                                                    <FormGroup controlId="formFirstName">
                                                        <Form.Label>First Name <span>*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="First Name"
                                                            name="First_Name"
                                                            value={checkOutForm.First_Name}
                                                            onChange={handleChange}
                                                            required
                                                            isInvalid={!checkOutForm.First_Name}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide your first name.
                                                        </Form.Control.Feedback>
                                                    </FormGroup>
                                                </div>
                                                <div className="name">
                                                    <FormGroup controlId="formLastName">
                                                        <Form.Label>Last Name <span>*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Last Name"
                                                            name="Last_Name"
                                                            value={checkOutForm.Last_Name}
                                                            onChange={handleChange}
                                                            required
                                                            isInvalid={!checkOutForm.Last_Name}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide your last name.
                                                        </Form.Control.Feedback>
                                                    </FormGroup>
                                                </div>
                                            </div>

                                            {/* Repeat the above pattern for other form fields */}

                                            <FormGroup controlId="formCompany">
                                                <Form.Label>Company name (optional) <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="Company_Name"
                                                    value={checkOutForm.Company_Name}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>

                                            {/* Repeat the above pattern for other form fields */}

                                            <FormGroup controlId="formCountry">
                                                <Form.Label>Country <span>*</span></Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    placeholder="Select An Option"
                                                    name="Country"
                                                    value={checkOutForm.Country}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.Country}
                                                >
                                                    <option></option>
                                                    <option value="Pakistan">Pakistan</option>

                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select your country.
                                                </Form.Control.Feedback>
                                            </FormGroup>
                                            {/* <FormGroup controlId="formCountry">
                                                <Form.Label>City <span>*</span></Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    placeholder="Select An Option"
                                                    name="City"
                                                    value={checkOutForm.City}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.City}
                                                >
                                                    <option></option>
                                                    <option value="Pakistan">Karachi</option>
                                                    <option value="Lahore">Lahore</option>
                                                    <option value="Multan">Multan</option>
                                                    <option value="
Faisalabad">
                                                        Faisalabad</option>
                                                    <option value="Gujranwala">Gujranwala</option>
                                                    <option value="Islamabad">Islamabad</option>
                                                    <option value="
Peshawar">
                                                        Peshawar</option>
                                                    <option value="Rawalpindi">Rawalpindi</option>
                                                    <option value="
Sialkot">
                                                        Sialkot</option>
                                                    <option value="Bahawalpur">Bahawalpur</option>
                                                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                                    <option value="
Sargodha">
                                                        Sargodha</option>
                                                    <option value="

Sukkur">

                                                        Sukkur</option>
                                                    <option value="

Gilgit">

                                                        Gilgit</option>
                                                    <option value="

Gujrat">

                                                        Gujrat</option>
                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select your country.
                                                </Form.Control.Feedback>
                                            </FormGroup> */}
                                            <FormGroup controlId="formCountry">
                                                <Form.Label>City <span>*</span></Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    placeholder="Select An Option"
                                                    name="City"
                                                    value={checkOutForm.City}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.City}
                                                >
                                                    <option></option>
                                                    <option value="Karachi">Karachi</option>
                                                    <option value="Lahore">Lahore</option>
                                                    <option value="Multan">Multan</option>
                                                    <option value="
Faisalabad">
                                                        Faisalabad</option>
                                                    <option value="Gujranwala">Gujranwala</option>
                                                    <option value="Islamabad">Islamabad</option>
                                                    <option value="
Peshawar">
                                                        Peshawar</option>
                                                    <option value="Rawalpindi">Rawalpindi</option>
                                                    <option value="
Sialkot">
                                                        Sialkot</option>
                                                    <option value="Bahawalpur">Bahawalpur</option>
                                                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                                    <option value="
Sargodha">
                                                        Sargodha</option>
                                                    <option value="

Sukkur">

                                                        Sukkur</option>
                                                    <option value="

Gilgit">

                                                        Gilgit</option>
                                                    <option value="

Gujrat">

                                                        Gujrat</option>
                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select your city.
                                                </Form.Control.Feedback>
                                            </FormGroup>

                                            <FormGroup controlId="formCountry">
                                                <Form.Label>Area <span>*</span></Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    placeholder="Select An Option"
                                                    name="Area"
                                                    value={checkOutForm.Area}
                                                    onChange={handleChange}

                                                >
                                                    {checkOutForm.City === 'Karachi' && (
                                                        <>
                                                            {/* Your Karachi-specific area options here */}
                                                            <option></option>
                                                            <option value="CLIFTON">CLIFTON</option>
                                                            <option value="GULISTAN E JOHAR">GULISTAN E JOHAR </option>
                                                            <option value="HADEED">HADEED</option>
                                                            <option value="BALDIA TOWN">BALDIA TOWN</option>

                                                            <option value="
MALIR">
                                                                MALIR</option>
                                                            {/* Add other Karachi-specific options as needed */}
                                                        </>
                                                    )}
                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select your area.
                                                </Form.Control.Feedback>
                                            </FormGroup>



                                            {/* <FormGroup controlId="formCountry">
                                                <Form.Label>Area <span>*</span></Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    placeholder="Select An Option"
                                                    name="Area"
                                                    value={checkOutForm.Area}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.Area}
                                                >
                                                    <option></option>
                                                    <option value="CLIFTON">CLIFTON</option>
                                                    <option value="GULISTAN E JOHAR">GULISTAN E JOHAR </option>
                                                    <option value="HADEED">HADEED</option>
                                                    <option value="BALDIA TOWN">BALDIA TOWN</option>

                                                    <option value="
MALIR">
                                                        MALIR</option>

                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select your country.
                                                </Form.Control.Feedback>
                                            </FormGroup> */}
                                            <FormGroup controlId="formCompany">
                                                <Form.Label>Street Address <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="Street_address"
                                                    value={checkOutForm.Street_address}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.Street_address}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="formCompany">
                                                <Form.Label>Postcode <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="Postcode"
                                                    value={checkOutForm.Postcode}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="formCompany">
                                                <Form.Label>Phone <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="Phone"
                                                    value={checkOutForm.Phone}
                                                    onChange={handleChange}
                                                    required
                                                    isInvalid={!checkOutForm.Phone}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="formCompany">
                                                <Form.Label>Email Address <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="Email_Address"
                                                    value={checkOutForm.Email_Address}
                                                    onChange={handleChange}


                                                />
                                            </FormGroup>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>
                                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '100px' }}
                                                />
                                            </FloatingLabel>
                                            {/* Repeat the above pattern for other form fields */}

                                            {/* Your other form fields */}
                                        </div>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                                <div className="Your_Order ">
                                    <div className="heading_details">
                                        <h3>Your Order</h3>
                                        <div className="Your_Order_deatail">

                                            <table class="shop_table woocommerce-checkout-review-order-table">
                                                <thead>
                                                    <tr>
                                                        <th class="product-name">Product</th>
                                                        <th class="product-total">Subtotal</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {cart?.map((Payment) => (
                                                        <tr class="cart_item">
                                                            <td style={{ background: '#fff' }} class="product-name">
                                                                <img width="55" height="55" src={Payment.img} alt="" style={{ width: 'auto', height: '50px' }} /> &nbsp; &nbsp; {Payment.title}&nbsp;														</td>
                                                            <td style={{ background: '#fff' }}></td>


                                                        </tr>
                                                    ))}
                                                    <tr class="order-total" style={{
                                                        background: 'none', borderRight: ' none !important',
                                                        border: '1px solid #dddd'
                                                    }}>
                                                        <th style={{ border: '1px solid #ddd' }}>Sub Total</th>
                                                        <td><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">₨</span>&nbsp;{subTotal}</bdi></span></strong> </td>
                                                    </tr>
                                                    <tr class="order-total" style={{
                                                        background: 'none', borderRight: ' none !important',
                                                        border: '1px solid #dddd'
                                                    }}>
                                                        <th style={{ border: '1px solid #ddd' }}>Discount</th>
                                                        <td><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">₨</span>&nbsp;{discount1}</bdi></span></strong> </td>
                                                    </tr>

                                                    <tr class="order-total" style={{
                                                        background: 'none', borderRight: ' none !important',
                                                        border: '1px solid #dddd'
                                                    }}>
                                                        <th style={{ border: '1px solid #ddd' }}>Total</th>
                                                        <td><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">₨</span>&nbsp;{total}</bdi></span></strong> </td>
                                                    </tr>

                                                    {shippingCharges > 0 && (
                                                        <tr class="order-total" style={{
                                                            background: 'none', borderRight: ' none !important',
                                                            border: '1px solid #dddd'
                                                        }}>
                                                            <th style={{ border: '1px solid #ddd' }}>Shipping Charges</th>
                                                            <td><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol"></span>&nbsp;RS {shippingCharges}</bdi></span></strong> </td>
                                                        </tr>


                                                    )}
                                                    <tr class="order-total" style={{
                                                        background: 'none', borderRight: ' none !important',
                                                        border: '1px solid #dddd'
                                                    }}>
                                                        <th style={{ border: '1px solid #ddd' }}>Net Total</th>
                                                        <td><strong><span class="woocommerce-Price-amount amount"><bdi><span style={{ fontSize: '20px' }} class="woocommerce-Price-currencySymbol">₨ {netTotal}</span>&nbsp;   </bdi></span></strong> </td>
                                                    </tr>
                                                </tbody>

                                            </table>

                                        </div>
                                        <h3 className='my-5'>Payment Method</h3>
                                        <div>
                                            {/* Your radio buttons and other form elements */}
                                            <div className="main-transfer main-transfer_1">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name='paymentMethod'
                                                        value='Payment_Bank'
                                                        checked={checkOutForm.paymentMethod === 'Payment_Bank'}
                                                        onChange={handleChange}
                                                    />&nbsp;&nbsp;
                                                    <img src={online} alt="" style={{ width: 'auto', height: '70px' }} />&nbsp;&nbsp;
                                                    Online Payment
                                                </label>
                                            </div>

                                            <div className="main-transfer main-transfer_2">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name='paymentMethod'
                                                        value='Payment_Status'
                                                        checked={checkOutForm.paymentMethod === 'Payment_Status'}
                                                        onChange={handleChange}
                                                    /> &nbsp;&nbsp;
                                                    <img src={Cash} alt="" style={{ width: 'auto', height: '70px' }} />&nbsp;&nbsp;
                                                    Cash on delivery
                                                </label>
                                            </div>

                                            {/* Your submit button */}

                                        </div>
                                    </div>
                                    <p className='my-3'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our  <font color="#32BCA9">privacy policy</font>.</p>
                                    <input
                                        type="checkbox"
                                        onChange={handleCheckboxChange}
                                        checked={isCheckboxChecked}
                                        required // This makes the checkbox required
                                    />
                                    <span>
                                        I have read and agree to the website
                                        <font color="#32BCA9">terms and conditions</font>
                                        <font color='red'> *</font>
                                    </span>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}



export default CheckoutForm

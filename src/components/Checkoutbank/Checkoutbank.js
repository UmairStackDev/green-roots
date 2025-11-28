import "./Checkoutbank.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Checkoutbank() {
    const { cart, totalPrice } = useSelector((state) => state.allCart);

    const shippingCharges = 350;
    const subTotal = totalPrice;
    const subTotal1 = totalPrice + shippingCharges;
    const discount = 0;
    const discount1 = (totalPrice * discount) / 100;
    const total = totalPrice - discount1;
    const netTotal = total + shippingCharges;

    return (
        <>
            <Navbar />
            <div className='bankcheckoutform'>
                <div className="container">
                    <div className="heading_check">
                        <h1>Checkout</h1>
                    </div>
                    <div className="main_form_check">
                        <div className="container">
                            <div className="table-responsive">
                                <Table striped bordered hover style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th colSpan={4} style={{ padding: '20px' }} className="thankyou">
                                                <i class="fa-regular fa-square-check" style={{ color: '#08db17' }}></i> Thank you. Your order has been received.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '20px' }}>Order number: <br /> 33100</td>
                                            <td style={{ padding: '20px' }}>Date:<br /> November 23, 2023</td>
                                            <td style={{ padding: '20px' }}>Total:<br /> ₨ 950.00</td>
                                            <td style={{ padding: '20px' }}>Payment method:<br /> Direct Bank Transfer</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className="heading_check1 my-5">
                                <h1>Our bank details</h1>
                            </div>
                            <div className="heading_check">
                                <h1 style={{ fontSize: '30px', fontWeight: '400' }}>Green Roots:</h1>
                            </div>
                            <div className="table-responsive">
                            <Table bordered style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '20px' }}>Bank: <br /> Bank Al Habib Limited</td>
                                        <td style={{ padding: '20px' }}>Account number:<br /> 1053-0981-004484-01-1</td>
                                        <td style={{ padding: '20px' }}>IBAN:<br /> PK93BAHL1053098100448401</td>
                                        <td style={{ padding: '20px' }}> BIC:<br /> BAHLPKKA</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                            <div className="table-responsive">
                            <Table striped bordered hover className="my-5"style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={4} style={{ padding: '20px', fontSize: '18px' }} className="thankyou"> ORDER DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={9}>PRODUCT</td>
                                        <td style={{ padding: '20px' }} >TOTAL</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={4}>
                                            {cart?.map((Payment) => (
                                                <div className="div d-flex" style={{ alignItems: 'center', gap: '10px' }}>
                                                    <img src={Payment.img} alt="" style={{ width: "auto", height: '50px' }} />
                                                    <p>{Payment.title}</p>
                                                    <br />
                                                    <br />
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={9}>Subtotal:</td>
                                        <td style={{ padding: '20px' }}>Rs {total}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={9}>Shipping:</td>
                                        <td style={{ padding: '20px' }}>Rs {shippingCharges}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={9}>Payment method:</td>
                                        <td style={{ padding: '20px' }}>Direct Bank Transfer</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px' }} colSpan={9}>Total:</td>
                                        <td style={{ padding: '20px' }}>Rs {netTotal}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkoutbank;

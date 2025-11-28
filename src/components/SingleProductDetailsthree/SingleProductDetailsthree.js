import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./SingleProductDetailsthree.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";

function SingleProductDetailsthree() {
    const { id } = useParams();
    const hearbsMainItems = useSelector((state) => state.allCart.hearbsMainItems);
    const item = hearbsMainItems.find((p) => p.id === parseInt(id, 10));
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(1);

    if (!item) {
        return <div>Product not found!</div>;
    }


    const handleIncrease = () => {
        setCartCount(cartCount + 1);
    };

    const handleDecrease = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...item, quantity: cartCount }));
    };

    return (
        <div className='singleproduct'>
            <Navbar />
            <Container>
                <Row>
                    <Col md={12} >
                        <Link to="" className='home_pro'>Home</Link> &nbsp; / &nbsp;
                        <span>Health & Beauty </span>

                    </Col>

                    <div className="main_product my-5">
                        <div className="heading_product my-5">
                            <h1>{item.title}</h1>
                            <div className="rating_product">
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li>0 Customer Reviews</li>
                                </ul>
                            </div>
                        </div>
                        <div className="main_images_producy">

                            <div className="image ">
                                <img src={item.img} alt="" style={{ width: "auto", height: "300px", }} />
                            </div>

                            <div className="contents ">
                                <div className="content_prices ">
                                    <h2 className='price ' style={{ color: "red", }}>₨ {item.price}</h2>
                                    <p className='discription '>{item.dis}</p>
                                    <h2 className='availablitiy'>{item.Availability} <span>{item.Availability1}</span>  </h2>
                                    {/* <div className="whishlist my-3">
            <i class="fa-regular fa-heart" style={{ fontSize: "16px" }}></i> <span>Add to wishlist</span>
        </div> */}

                                </div>
                                <div className="cotogory my-3">
                                    <h3 className='my-2'>{item.SKU}<span>{item.SKU1}</span></h3>
                                    <h3 className='my-2'>Category:<span>{item.Category}</span></h3>
                                    <h3 className='my-2'>{item.Tags}<span style={{ fontSize: "12px" }}>{item.Tags1}</span></h3>
                                    <div>

                                        <div className="main_button_add d-flex gap-4 my-3">
                                            <div className="main_button_ d-flex gap-3 align-items-center">
                                                <button style={{ padding: '0px', background: 'none' }} onClick={handleIncrease}><i class="fa-solid fa-arrow-up" style={{ color: "#000" }}></i></button>
                                                <p> {cartCount}</p>
                                                <button onClick={handleDecrease} style={{ padding: '0px', background: 'none' }}  ><i class="fa-solid fa-arrow-down" style={{ color: "#000" }}></i></button>

                                            </div>

                                            <button onClick={handleAddToCart}>Add to Cart</button>

                                            {/* <button onClick={() => dispatch(addToCart({ ...item, quantity: cartCount }))}>
Add to Cart
</button> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="main_product main_product_1">


















                        <h2 className='benifits'>{item.Benefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.Benefits1}</li>
                            <li>{item.Benefits2}</li>
                            <li>{item.Benefits3}</li>
                            <li>{item.Benefits4}</li>
                            <li>{item.Benefits5}</li>
                            <li>{item.Benefits6}</li>
                            <li>{item.Benefits7}</li>
                            <li>{item.Benefits8}</li>
                            <li>{item.Benefits9}</li>
                            <li>{item.Benefits10}</li>
                            <li>{item.Benefits11}</li>
                            <li>{item.Benefits12}</li>
                            <li>{item.Benefits13}</li>
                            <li>{item.Benefits14}</li>
                            <li>{item.Benefits15}</li>
                            <li>{item.Benefits16}</li>
                            <li>{item.Benefits17}</li>
                            <li>{item.Benefits18}</li>
                            <li>{item.Benefits19}</li>
                            <li>{item.Benefits20}</li>
                            <li>{item.Benefits21}</li>
                            <li>{item.Benefits22}</li>
                            <li>{item.Benefits23}</li>
                            <li>{item.Benefits24}</li>
                            <li>{item.Benefits25}</li>
                            <li>{item.Benefits26}</li>

                            <li>{item.Benefits27}</li>
                            <li>{item.Benefits28}</li>
                            <li>{item.Benefits29}</li>
                            <li>{item.Benefits30}</li>
                            <li>{item.Benefits31}</li>
                            <li>{item.Benefits32}</li>
                            <li>{item.Benefits33}</li>
                            <li>{item.Benefits34}</li>

                            <li>{item.Benefits35}</li>
                        </ul>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.Usage}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Usage1}</li>
                                <li>{item.Usage2}</li>
                                <li>{item.Usage3}</li>
                                <li>{item.Usage4}</li>
                                <li>{item.Usage5}</li>
                                <li>{item.Usage6}</li>
                                <li style={{ color: 'red' }}>{item.Usagenotice}</li>
                                <li>{item.Usage7}</li>
                                <li>{item.Usage8}</li>
                                <li>{item.Usage9}</li>
                                <li>{item.Usage10}</li>
                                <li>{item.Usage11}</li>
                                <li>{item.Usage12}</li>
                                <li>{item.Usage13}</li>
                                <li>{item.Usage14}</li>
                                <li>{item.Usage15}</li>
                                <li>{item.Usage16}</li>
                                <li>{item.Usage17}</li>
                                <li>{item.Usage18}</li>
                                <li>{item.Usage19}</li>
                                <li>{item.Usage20}</li>
                                <li>{item.Usage21}</li>
                                <li>{item.Usage22}</li>
                                <li>{item.Usage23}</li>
                                <li>{item.Usage24}</li>
                                <li>{item.Usage25}</li>
                                <li>{item.Usage26}</li>
                                <li>{item.Usage27}</li>
                                <li>{item.Usage28}</li>


                            </ul>
                        </div>



                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.Ingredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Ingredients1}</li>
                                <li>{item.Ingredients2}</li>
                                <li>{item.Ingredients3}</li>
                                <li>{item.Ingredients4}</li>
                                <li>{item.Ingredients5}</li>
                                <li>{item.Ingredients6}</li>
                                <li>{item.Ingredients7}</li>
                                <li>{item.Ingredients8}</li>
                                <li>{item.Ingredients9}</li>
                                <li>{item.Ingredients10}</li>
                                <li>{item.Ingredients11}</li>
                                <li>{item.Ingredients12}</li>
                                <li>{item.Ingredients13}</li>
                                <li>{item.Ingredients14}</li>
                                <li>{item.Ingredients15}</li>
                                <li>{item.Ingredients16}</li>
                                <li>{item.Ingredients17}</li>
                                <li>{item.Ingredients18}</li>
                                <li>{item.Ingredients19}</li>
                                <li>{item.Ingredients20}</li>
                                <li>{item.Ingredients21}</li>
                                <li>{item.Ingredients22}</li>
                                <li>{item.Ingredients23}</li>
                                <li>{item.Ingredients24}</li>
                                <li>{item.Ingredients25}</li>
                                <li>{item.Ingredients26}</li>
                                <li>{item.Ingredients27}</li>
                                <li>{item.Ingredients28}</li>
                                <li>{item.Ingredients29}</li>
                                <li>{item.Ingredients30}</li>
                                <li>{item.Ingredients31}</li>
                                <li>{item.Ingredients32}</li>
                                <li>{item.Ingredients33}</li>
                                <li>{item.Ingredients34}</li>
                                <li>{item.Ingredients35}</li>
                                <li>{item.Ingredients36}</li>
                                <li>{item.Ingredients37}</li>
                                <li>{item.Ingredients38}</li>
                                <li>{item.Ingredients39}</li>
                                <li>{item.Ingredients40}</li>
                                <li>{item.Ingredients41}</li>
                                <li>{item.Ingredients42}</li>

                            </ul>
                        </div>

                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.SpecialInstructions}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.SpecialInstructions1}</li>
                                <li>{item.SpecialInstructions2}</li>
                                <li>{item.SpecialInstructions3}</li>
                                <li>{item.SpecialInstructions4}</li>
                                <li>{item.SpecialInstructions5}</li>
                                <li>{item.SpecialInstructions7}</li>
                                <li>{item.SpecialInstructions8}</li>
                                <li>{item.SpecialInstructions9}</li>
                                <li>{item.SpecialInstructions10}</li>
                                <li>{item.SpecialInstructions11}</li>
                                <li>{item.SpecialInstructions12}</li>
                                <li>{item.SpecialInstructions13}</li>
                                <li>{item.SpecialInstructions14}</li>
                                <li>{item.SpecialInstructions15}</li>
                                <li>{item.SpecialInstructions16}</li>
                                <li>{item.SpecialInstructions17}</li>
                                <li>{item.SpecialInstructions18}</li>
                                <li>{item.SpecialInstructions19}</li>
                                <li>{item.SpecialInstructions20}</li>
                                <li>{item.SpecialInstructions21}</li>
                                <li>{item.SpecialInstructions22}</li>
                                <li>{item.SpecialInstructions23}</li>
                                <li>{item.SpecialInstructions24}</li>
                                <li>{item.SpecialInstructions25}</li>
                                <li>{item.SpecialInstructions26}</li>
                                <li>{item.SpecialInstructions27}</li>
                                <li>{item.SpecialInstructions28}</li>
                                <li>{item.SpecialInstructions29}</li>
                                <li>{item.SpecialInstructions30}</li>
                                <li>{item.SpecialInstructions31}</li>
                                <li>{item.SpecialInstructions32}</li>
                                <li>{item.SpecialInstructions33}</li>
                                <li>{item.SpecialInstructions34}</li>
                                <li>{item.SpecialInstructions35}</li>
                                <li>{item.SpecialInstructions36}</li>

                            </ul>
                        </div>


                        <div className="table_" style={{ paddingBottom: '50px' }}>
                            <table>
                                <tr>
                                    <th>{item.Weight}</th>
                                    <td style={{ background: '#DDDDDD' }}>{item.Weight1}</td>

                                </tr>
                                <tr>
                                    <th>{item.dicQuantity}</th>
                                    <td>{item.dicQuantity1}</td>

                                </tr>
                            </table>
                        </div>


                        <div className="main_reviews">
                            <h2 >Reviews</h2>
                            <p className='my-3'>There are no reviews yet.</p>
                            <h2>Be The First To Review “{item.title}”</h2>
                            <p className='my-3'>Your email address will not be published. Required fields are marked *</p>
                            <div className="rating_product">
                                <ul>
                                    <li> Your rating <span style={{ color: 'red' }}> * </span> </li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                            <div className="form my-3">
                                <Form.Label htmlFor="inputPassword5" style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Your review <span style={{ color: 'red' }}> * </span></Form.Label>
                                <textarea
                                    name=""
                                    id="inputPassword5"
                                    cols="30"
                                    rows="10"
                                    style={{
                                        width: '50%',
                                        padding: '8px',
                                        boxSizing: 'border-box',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        fontSize: '16px',
                                        marginBottom: '16px',
                                    }}
                                ></textarea>
                                <Form.Label htmlFor="inputPassword5">Name <span style={{ color: 'red' }}> * </span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    style={{ width: "30%", outline: 'none', boxShadow: 'none' }}
                                />
                                <Form.Label htmlFor="inputPassword5">Email  <span style={{ color: 'red' }}> * </span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    style={{ width: "30%", outline: 'none', boxShadow: 'none' }}
                                />
                                <input type="checkbox" /> <span>Save my name, email, and website in this browser for the next time I comment.</span><br></br>
                                <button className='my-3'>Submit</button>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default SingleProductDetailsthree

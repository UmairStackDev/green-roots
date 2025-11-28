import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./SingleProductDetailsHerbs.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";

function SingleProductDetailsHerbs() {
  const { id } = useParams();
  const herbsProductItems = useSelector((state) => state.allCart.herbsProductItems);
  const item = herbsProductItems.find((p) => p.id === parseInt(id, 10));
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
                  

                          
                    
                       

                           
              

                          



                          

                           

                      
                    {item.Benefits && (
    <>
        <h2 className='benifits'>{item.Benefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `Benefits${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}

{item.Usage && (
    <>
        <h2 className='benifits'>{item.Usage}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `Usage${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
                       
                  
                       {item.Ingredients && (
    <>
        <h2 className='benifits'>{item.Ingredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `Ingredients${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
              {item.SpecialInstructions && (
    <>
        <h2 className='benifits'>{item.SpecialInstructions}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `SpecialInstructions${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
                       
                        
                       
                           
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

export default SingleProductDetailsHerbs

import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./AllProduct.css"


// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../features/cartSlice";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

function AllProduct() {

    const AllproductsmanageItems = useSelector((state) => state.allCart.AllproductsmanageItems);
    // const essentialOilsItems = useSelector((state) => state.allCart.essentialOilsItems);
    // const healthProductItems = useSelector((state) => state.allCart.healthProductItems);
    // const herbsProductItems = useSelector((state) => state.allCart.herbsProductItems);
    // const medicineProductItems = useSelector((state) => state.allCart.medicineProductItems);



    // const allProducts = [...naturalOilItems, ...essentialOilsItems, ...healthProductItems, ...herbsProductItems, ...medicineProductItems];
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = AllproductsmanageItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('filteredItems:', filteredItems);

    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <div className='AllProduct'>
            <Navbar />
            <Container>
                <Row>

                    <Col md={12} >
                        <Link to="/Home" className='home_pro'>Home</Link> &nbsp; / &nbsp;
                        <span>Health & Shop </span>
                    </Col>
                    <div className="main_product my-5">
                        <div className="search-container my-5" style={{ display: 'flex', alignItems: 'baseline', maxWidth: '400px', margin: '0 auto' }}>
                            <input
                                type="text"
                                style={{
                                    padding: '12px',
                                    fontSize: '16px',
                                    border: '2px solid #3498db',
                                    borderRadius: '25px 0 0 25px',
                                    marginRight: '0',
                                    flex: '1',
                                    outline: 'none',
                                }}
                                placeholder="Search here..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button
                                style={{
                                    padding: '12px 20px',
                                    fontSize: '16px',
                                    backgroundColor: '#3498db',
                                    color: '#fff',
                                    border: '2px solid #3498db',
                                    borderRadius: '0 25px 25px 0',
                                    marginLeft: '8px', // Add some left margin
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                Search
                            </button>
                        </div>


                        <div className="heading_product my-5">
                            <h1>All Product</h1>
                            <div className="rating_product">
                                <ul>
                                    <li>Showing 1–40 of 190 results</li>
                                </ul>
                            </div>
                        </div>


                        <div className="container">
                            <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                                {filteredItems.map((item) => (
                                    <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"  >

                                        <div className="item-box product-grid  product-align clearfix">
                                            <div className="thumbnail">
                                                <div className="product-item clearfix" data-productid="4125">
                                                    <div className="picture"><Link to="#"
                                                        title="Show details for Herbal Oil 30ml - Rosemary"> <img className="lazyOwl" src={item.img}
                                                            alt="Picture of Herbal Oil 30ml - Rosemary"
                                                        /> </Link></div>
                                                    <div className="caption">
                                                        <div className="details">
                                                            <h3 className="product-title"><Link to="#">{item.title}</Link>
                                                            </h3>
                                                            <div className="prices"><span>{item.ml}</span><span>{item.gram}</span><br /> <span
                                                                className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}></span></b></span></div>
                                                            <div className="product-rating-box" title="0 review(s)">
                                                                <div className="rating">
                                                                    <div style={{ width: "0%" }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                            <div className="add-info">
                                                                <div className="buttons"></div>
                                                            </div>
                                                            <div class="wishlist-compare-wrapper"><button type="button" title="Add to wishlist"
                                                                className="button-2 add-to-wishlist-button"
                                                            >Wishlist</button>
                                                                <button type="button" title="Add to Cart"
                                                                    className="btn btn-primary product-box-add-to-cart-button" onClick={() => dispatch(addToCart(item))}
                                                                >Add to Cart</button>
                                                                <Link to={`/SingleProductDetailsAllproduct/${item.id}`}>
                                                                    <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                                                    >Details</button></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}








                            </div>
                        </div>

                        {/* <div className="container">
                            <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                                {essentialOilsItems.map((item) => (
                                    <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"  >

                                        <div className="item-box product-grid  product-align clearfix">
                                            <div className="thumbnail">
                                                <div className="product-item clearfix" data-productid="4125">
                                                    <div className="picture"><Link to="#"
                                                        title="Show details for Herbal Oil 30ml - Rosemary"> <img className="lazyOwl" src={item.img}
                                                            alt="Picture of Herbal Oil 30ml - Rosemary"
                                                        /> </Link></div>
                                                    <div className="caption">
                                                        <div className="details">
                                                            <h3 className="product-title"><Link to="#">{item.title}</Link>
                                                            </h3>
                                                            <div className="prices"><span>{item.ml}</span><br /> <span
                                                                className="price actual-price"> <b> Rs {item.price * 0.5} <br /> <span style={{ color: 'red' }}> <del> Rs {item.price}  </del>-50%</span></b></span></div>
                                                            <div className="product-rating-box" title="0 review(s)">
                                                                <div className="rating">
                                                                    <div style={{ width: "0%" }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                            <div className="add-info">
                                                                <div className="buttons"></div>
                                                            </div>
                                                            <div class="wishlist-compare-wrapper"><button type="button" title="Add to wishlist"
                                                                className="button-2 add-to-wishlist-button"
                                                            >Wishlist</button>
                                                                <button type="button" title="Add to Cart"
                                                                    className="btn btn-primary product-box-add-to-cart-button" onClick={() => dispatch(addToCart(item))}
                                                                >Cart</button>
                                                                <Link to={`/SingleProductDetailsEssential/${item.id}`}>
                                                                    <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                                                    >Details</button></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}








                            </div>
                        </div>




                        <div className="container">
                            <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                                {healthProductItems.map((item) => (
                                    <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"  >

                                        <div className="item-box product-grid  product-align clearfix">
                                            <div className="thumbnail">
                                                <div className="product-item clearfix" data-productid="4125">
                                                    <div className="picture"><Link to="#"
                                                        title="Show details for Herbal Oil 30ml - Rosemary"> <img className="lazyOwl" src={item.img}
                                                            alt="Picture of Herbal Oil 30ml - Rosemary"
                                                        /> </Link></div>
                                                    <div className="caption">
                                                        <div className="details">
                                                            <h3 className="product-title"><Link to="#">{item.title}</Link>
                                                            </h3>
                                                            <div className="prices"><span>{item.ml}</span><br /> <span
                                                                className="price actual-price"> <b> Rs {item.price * 0.5} <br /> <span style={{ color: 'red' }}> <del> Rs {item.price}  </del>-50%</span></b></span></div>
                                                            <div className="product-rating-box" title="0 review(s)">
                                                                <div className="rating">
                                                                    <div style={{ width: "0%" }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                            <div className="add-info">
                                                                <div className="buttons"></div>
                                                            </div>
                                                            <div class="wishlist-compare-wrapper"><button type="button" title="Add to wishlist"
                                                                className="button-2 add-to-wishlist-button"
                                                            >Wishlist</button>
                                                                <button type="button" title="Add to Cart"
                                                                    className="btn btn-primary product-box-add-to-cart-button" onClick={() => dispatch(addToCart(item))}
                                                                >Cart</button>
                                                                <Link to={`/SingleProductDetailshealth/${item.id}`}>
                                                                    <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                                                    >Details</button></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}








                            </div>
                        </div>
                        <div className="container">
                            <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                                {herbsProductItems.map((item) => (
                                    <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"  >

                                        <div className="item-box product-grid  product-align clearfix">
                                            <div className="thumbnail">
                                                <div className="product-item clearfix" data-productid="4125">
                                                    <div className="picture"><Link to="#"
                                                        title="Show details for Herbal Oil 30ml - Rosemary"> <img className="lazyOwl" src={item.img}
                                                            alt="Picture of Herbal Oil 30ml - Rosemary"
                                                        /> </Link></div>
                                                    <div className="caption">
                                                        <div className="details">
                                                            <h3 className="product-title"><Link to="#">{item.title}</Link>
                                                            </h3>
                                                            <div className="prices"><span>{item.ml}</span><br /><span
                                                                className="price actual-price"> <b> Rs {item.price * 0.5} <br /> <span style={{ color: 'red' }}> <del> Rs {item.price}  </del>-50%</span></b></span></div>
                                                            <div className="product-rating-box" title="0 review(s)">
                                                                <div className="rating">
                                                                    <div style={{ width: "0%" }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                            <div className="add-info">
                                                                <div className="buttons"></div>
                                                            </div>
                                                            <div class="wishlist-compare-wrapper"><button type="button" title="Add to wishlist"
                                                                className="button-2 add-to-wishlist-button"
                                                            >Wishlist</button>
                                                                <button type="button" title="Add to Cart"
                                                                    className="btn btn-primary product-box-add-to-cart-button" onClick={() => dispatch(addToCart(item))}
                                                                >Cart</button>
                                                                <Link to={`/SingleProductDetailsHerbs/${item.id}`}>
                                                                    <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                                                    >Details</button></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}








                            </div>
                        </div>


                        <div className="container">
                            <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                                {medicineProductItems.map((item) => (
                                    <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"  >

                                        <div className="item-box product-grid  product-align clearfix">
                                            <div className="thumbnail">
                                                <div className="product-item clearfix" data-productid="4125">
                                                    <div className="picture"><Link to="#"
                                                        title="Show details for Herbal Oil 30ml - Rosemary"> <img className="lazyOwl" src={item.img}
                                                            alt="Picture of Herbal Oil 30ml - Rosemary"
                                                        /> </Link></div>
                                                    <div className="caption">
                                                        <div className="details">
                                                            <h3 className="product-title"><Link to="#">{item.title}</Link>
                                                            </h3>
                                                            <div className="prices"><span>{item.ml}</span><br /> <span>{item.gram}<span>{item.tablet}</span><span>{item.Capsules}</span></span><span
                                                                className="price actual-price"> <b> Rs {item.price * 0.5} <br /> <span style={{ color: 'red' }}> <del> Rs {item.price}  </del>-50%</span></b></span></div>
                                                            <div className="product-rating-box" title="0 review(s)">
                                                                <div className="rating">
                                                                    <div style={{ width: "0%" }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                            <div className="add-info">
                                                                <div className="buttons"></div>
                                                            </div>
                                                            <div class="wishlist-compare-wrapper"><button type="button" title="Add to wishlist"
                                                                className="button-2 add-to-wishlist-button"
                                                            >Wishlist</button>
                                                                <button type="button" title="Add to Cart"
                                                                    className="btn btn-primary product-box-add-to-cart-button" onClick={() => dispatch(addToCart(item))}
                                                                >Cart</button>
                                                                <Link to={`/SingleProductDetailsmedicine/${item.id}`}>
                                                                    <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                                                    >Details</button></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}








                            </div>
                        </div> */}


                        {/* <div className="paggination d-flex justify-content-center my-5">
                            <Pagination>{items}</Pagination>
                        </div> */}
                    </div>


                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AllProduct



import Navbar from './Navbar';
import Footer from './Footer';
import "./Home.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Fresh Cart.css";
import React, { useEffect, useState } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../features/cartSlice";
import { Link } from 'react-router-dom';
function Home() {





  const homeBestSellingItems = useSelector((state) => state.allCart.homeBestSellingItems);

  const healthProductMainItems = useSelector((state) => state.allCart.healthProductMainItems);

  const hearbsMainItems = useSelector((state) => state.allCart.hearbsMainItems);

  const essentailOilsMainItems = useSelector((state) => state.allCart.essentailOilsMainItems);

  const naturalOilMainItems = useSelector((state) => state.allCart.naturalOilMainItems);

  const customRecomendationItems = useSelector((state) => state.allCart.customRecomendationItems);

  const medicineProductMainItems = useSelector((state) => state.allCart.medicineProductMainItems);

  const topRatedItems = useSelector((state) => state.allCart.topRatedItems);
  const dispatch = useDispatch();




  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // Set autoplay interval in milliseconds
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);



  

  
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div className="container-fluid mt-5">
        <div className="container">
        
          <div className="row">
            <div className="col">
              <h1 className="fs">BEST SELLING
              </h1>
            </div>
          </div>

          <div class="row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
       
          {homeBestSellingItems.map((item) => (
              <div class="col my-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000" key={item.id}   >

                <div className="item-box product-grid  product-align clearfix" >
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
                          <div className="prices"><span>{item.gram}</span> <span>{item.capsule}</span> <br /> <span
                            className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                            <Link to={`/products/${item.id}`}>
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
      </div>
      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">Amazing Health & beauty Products</h1>
            <span class="text-muted">For a Revamped You</span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {healthProductMainItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.gram}</span><span>{item.tablet}</span><span>{item.capsule}</span><span>{item.ml}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price } <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailstow/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>

      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">HERBS & SPICES</h1>
            <span class="text-muted">Most Assorted & Preserved</span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {hearbsMainItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.gram}</span><span>{item.tablet}</span><span>{item.capsule}</span><span>{item.ml}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailsthree/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>

      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">HERBAL REMEDIES & CURE</h1>
            <span class="text-muted">Herbal Remedies for All</span> <br />
            <span class="text-muted">Live Healthy</span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {medicineProductMainItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.gram}</span><span>{item.tablet}</span><span>{item.capsule}</span> <span>{item.ml}</span>  <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailsfour/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>


      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">Eccentric Essential Oils</h1>
            <span class="text-muted">ESSENTIAL OILS</span> <br />
            <span class="text-muted">Aromatic, Refreshing, Healing</span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {essentailOilsMainItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.ml}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailsfive/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>


      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">NATURAL OILS</h1>
            <span class="text-muted">100% Pure Natural Oils</span> <br />
            <span class="text-muted">Sourced from preserved eco systems</span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {naturalOilMainItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.ml}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailssix/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>


      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">HIGH DEMAND</h1>
            <span class="text-muted">Top Rated</span> <br />
            <span class="text-muted">Pre-assorted For You
            </span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {topRatedItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.ml}</span> <span>{item.Capsules}</span><span>{item.gram}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailseven/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>

      <div class="container-fluid mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="container">
          <div className="heading_home my-3">
            <h1 class="fs">DAILY RECOMMENDED</h1>
            <span class="text-muted">Custom Recommendation</span> <br />
            <span class="text-muted">Only for You
            </span>
          </div>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {customRecomendationItems.map((item) => (
              <div className="item" >
                <div>

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
                            <div className="prices"><span>{item.ml}</span><span>{item.gram}</span> <br /> <span
                              className="price actual-price"> <b> Rs {item.price} <br /> <span style={{ color: 'red' }}> </span></b></span></div>
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
                              <Link to={`/SingleProductDetailseight/${item.id}`}>
                                <button type="button" title="Details" className="button-2 add-to-express-list-button"
                                >Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </OwlCarousel>
        </div>
      </div>
      <div className="whats_icon">
        <a
          href="whatsapp://send?phone=9203021701786"

        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <Footer />
    </div>

  )
}

export default Home

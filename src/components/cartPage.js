import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartPage.css"
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <div>
      <Navbar />
      <section className="h-100 gradient-custom cartpage_page">
 
        <div className="container py-5">
        <h3>Shopping Carts</h3>
          <div className="row d-flex justify-content-center my-4">
       
            <div className="col-md-8 col_cart_1">
            
              <div className="card mb-4">
                
                <div className="card-header py-3">
              
                  <table>
                    <th style={{ border: 'none' }}>Image</th>
                    <th style={{ border: 'none' }}>Product Name</th>
                    <th className="quantity" style={{ border: 'none', width: '183 !important' }}>Quantity</th>
                    <th className="price" style={{ border: 'none', width: '176 !important' }}>Price</th>
                  </table>
                </div>
                <div className="card-body">
                  {cart?.map((data) => (
                    <div className="row" style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', paddingTop: '10px' }}>
                      <div className="col-lg-2 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img style={{ maxWidth: '60px', height: '50px' }}
                            src={data.img}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>


                      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

                        <p>
                          <strong>{data.title}</strong>
                        </p>


                      </div>

                      <div className="col-lg-7 col-md-6 mb-4 mb-lg-0">

                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px", gap: '70px' }}
                        >
                          <div className="button d-flex" style={{alignItems:'center'}}>
                            <button style={{ height: '30px', width: '30px' }}
                              className="btn btn-primary px-3 me-2"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-minus" style={{
                                position: 'relative',
                                top: '-4px',
                                left: '-6px'
                              }}></i>
                            </button>

                            <div className="form-outline">
                              <input

                                min="0"
                                name="quantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                                onChange={() => null}
                                style={{
                                  height: '30px !important',
                                width: '77px'
                                }}
                              />


                            </div>

                            <button style={{ height: '30px', width: '30px' }}
                              className="btn btn-primary px-3 ms-2"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-plus" style={{
                                position: 'relative',
                                top: '-4px',
                                left: '-6px'
                              }}></i>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>{data.price}</strong>
                          </p>

                          <button style={{ height: '30px', width: '30px' }}
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem(data.id))}

                          >
                            <i className="fas fa-trash" style={{
                              position: 'relative',
                              top: '0px',

                            }}></i>
                          </button>
                        </div>


                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4 col_cart_2">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <Link to='/anyLogin'>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;

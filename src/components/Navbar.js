import React, { useEffect, useState } from "react";
import logo from "../assets/Green-Root green-Logo.png .jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"
import Header from "./Header/Header";
import Headertwo from "../header/Headertwo"
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";
export default function Navbar(props) {

  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  },);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {loading ? (
        <div class="container-fluid mt-1">
          <div class="/">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-3 col-sm-2 mr-3">
                <nav class="navbar navbar-light bg-white">
                  <Link class="navbar-brand " to="#">
                    <Skeleton width={170} height={50} />
                  </Link>
                </nav>
              </div>
              <div class="col-6 d-none d-lg-block">
                <div class="input-group">
                  <Skeleton width={173} height={40} />
                  <Skeleton width={430} height={40} />
                  <div class="input-group-append">
                    <Skeleton width={42} height={40} />
                  </div>
                </div>
              </div>
              <div class="col-2 d-flex justify-content-start ml-n4">
                <Skeleton width={134} height={40} />
              </div>
              <div class="col-4 col-lg-2 ml-auto d-flex justify-content-end pr-lg-5">
                <Link to="#" class="text-muted">
                  <Skeleton width={20} height={20} />
                </Link>

                <Link to="#" class="text-muted">
                  <Skeleton width={20} height={20} />
                </Link>

                <Link to="#" class="text-muted">
                  <Skeleton width={20} height={20} />
                </Link>
              </div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-white">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fillrule="currentColor"
                    class="bi bi-text-indent-left text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                </button>
              </nav>
            </div>

            <div class="row">
              <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item ml-2 my-lg-0">
                        <Skeleton width={174} height={38} />
                      </li>

                      <li class="nav-item ml-2">
                        <Skeleton width={72} height={35} />
                      </li>

                      <li class="nav-item mx-2">
                        <Skeleton width={72} height={35} />
                      </li>

                      <li class="nav-item mx-1">
                        <Skeleton width={72} height={35} />
                      </li>

                      <li class="nav-item mx-2">
                        <Skeleton width={82} height={35} />
                      </li>

                      <li class="nav-item mx-2">
                        <Skeleton width={82} height={35} />
                      </li>

                      <li class="nav-item mx-2">
                        <Skeleton width={72} height={35} />
                      </li>

                      <li class="nav-item ml-1">
                        <Skeleton width={72} height={35} />
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="">
          <div class="/">
            <Header />
            <Headertwo />
            <div class="row back_navbar">
              <div className="main_navvv d-flex">
              <Button variant="primary" onClick={handleShow} className="sidenavbar_butt">
                <div className="div"></div>
                <div className="div1"></div>
                <div className="div2"></div>
              </Button>

              <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <img src={logo} alt="" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                 <ul>
                  <li><Link to="/">
                  <i class="fa-solid fa-house"></i>
                          Home
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/">
                  <i class="fa-solid fa-store"></i>
                          All Products
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/product-category/health-beauty/">
                  <i class="fa-regular fa-face-smile"></i>
                          Health & Beauty
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/product-category/medicines/">
                  <i class="fa-solid fa-heart-pulse"></i>
                          Medicines
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/product-category/herbs-spices/">
                  <i class="fa-solid fa-feather"></i>
                          Herbs & Spices
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/product-category/essential-oils/">
                  <i class="fa-solid fa-wand-magic"></i>
                  Essential Oils
                    </Link></li>
                  <li><Link to="https://shop.greenrootspk.com/product-category/natural-oils/">
                  <i class="fa-solid fa-droplet"></i>
                          Natural Oils
                    </Link></li>
                 </ul>
                </Offcanvas.Body>
              </Offcanvas>
              <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light navbar_nav">
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="main_ul d-flex" style={{gap:'20px',alignItems:'center'}}>
                    <ul class="navbar-nav">


                     

                      <li class="nav-item ">
                        <Link
                          class="/"
                        >
                          <i class="fa-solid fa-house"></i>
                          Home
                        </Link>
                      </li>

                      <li class="nav-item ">
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/"
                        >
                          <i class="fa-solid fa-store"></i>
                          All Products
                        </Link>
                      </li>

                      <li class="nav-item " style={{whiteSpace:'nowrap'}}>
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/product-category/health-beauty/"
                        >
                          <i class="fa-regular fa-face-smile"></i>
                          Health & Beauty
                        </Link>
                      </li>

                      <li class="nav-item ">
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/product-category/medicines/"
                        >
                          <i class="fa-solid fa-heart-pulse"></i>
                          Medicines
                        </Link>
                      </li>

                      <li class="nav-item ">
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/product-category/herbs-spices/"
                        >
                          <i class="fa-solid fa-feather"></i>
                          Herbs & Spices
                        </Link>
                      </li>

                      <li class="nav-item ">
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/product-category/essential-oils/"
                        >
                          <i class="fa-solid fa-wand-magic"></i>
                          Essential Oils
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link
                          class="nav-link h6 text-lg-white text-dark ml-2"
                          to="https://shop.greenrootspk.com/product-category/natural-oils/"
                        >
                          <i class="fa-solid fa-droplet"></i>
                          Natural Oils
                        </Link>
                      </li>
                    </ul>
                   
                    </div>
                  </div>
                </nav>
              </div>
              {/* <div className="whats_icon2">
                    <Link to="/CartPage">
                   
                    <i className="fa-solid fa-cart-shopping" style={{fontSize:'30px',color:''}}> <span className="counter" >{totalQuantity}</span></i>
                    </Link>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../../../assets/Green Roots Logo (2).png"
import "./NewHeader.css"
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function NewHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search value:', searchValue);
        // Add your search logic here
    };
    return (
        <div>
            <Container fluid>
                <main className='newheader'>
                    <div className="offcanvas__">
                        <Button variant="primary" onClick={handleShow} style={{ color: '#000', backgroundColor: '#fff', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="currentColor">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Button>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <img src={logo} alt="" style={{ width: 'auto', height: '60px' }} />

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className='links'>
                                    <ul>
                                        <li><Link to="/" className='navbar__a' style={{fontSize:"20px"}} >Home</Link></li>
                                        <li> <Link to="/About" style={{fontSize:"20px"}} className='navbar__a'  >About Us</Link></li>
                                        <li> <Link to="/Story" style={{fontSize:"20px"}} className='navbar__a'  >Our Story</Link></li>
                                        <li>   <Link to="/Vison" style={{fontSize:"20px"}} className='navbar__a'  >Our Vision</Link></li>



                                        <li><Link to="https://shop.greenrootspk.com/product-category/health-beauty/" className='navbar__a' style={{fontSize:"20px"}} >Health & Beauty</Link></li>
                                        <li> <Link to="https://shop.greenrootspk.com/product-category/medicines/" style={{fontSize:"20px"}} className='navbar__a'  >Medicines</Link></li>
                                        <li> <Link to="https://shop.greenrootspk.com/product-category/herbs-spices/" style={{fontSize:"20px"}} className='navbar__a'  >Herbs & Spices</Link></li>
                                        <li>   <Link to="https://shop.greenrootspk.com/product-category/essential-oils/" style={{fontSize:"20px"}} className='navbar__a'  >Essential Oils</Link></li>
                                        <li>   <Link to="https://shop.greenrootspk.com/product-category/natural-oils/" style={{fontSize:"20px"}} className='navbar__a'  >Natural Oils</Link></li>
                                    </ul>




                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div className="search_box ">
                            <div className="t4s-search-header__main t4s-pr t4s-oh t4s-d-flex t4s-col t4s-col-item d-flex align-items-baseline">
                                <input
                                    className="t4s-search-header__input t4s-input__currentcolor"
                                    type="text"
                                    name="q"
                                    placeholder="Search for products"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    aria-activedescendant=""
                                    aria-expanded="false"
                                />
                                <button
                                    className="t4s-search-header__submit"
                                    type="submit"
                                    onClick={handleSearchSubmit}
                                >
                                    search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='buttons '>
                        <div className="social">
                            <div className="contact_me">
                                <i class="fa-solid fa-phone"></i>
                                <a href="tel::+92-21 35303761-4" className='a_num'>:+92-21 35303761-4</a> <br />
                                (Operational Timings: 11:00 – 22:00)
                            </div>
                        </div>

                    </div>

                </main>
            </Container>
        </div>
    )
}

export default NewHeader

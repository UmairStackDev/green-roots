import React, { useState } from 'react';
import {Navbar,  Container, Nav, } from 'react-bootstrap';
import logo from "../assets/Green Roots Logo (2).png"
// import logo from "../assets/Dr Essa lockup-01.png"
import { Link } from 'react-router-dom';

import "./Headertwo.css";

function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className='header_2'>
    <div className='navbarr' >
    <Navbar expand="lg" expanded={expanded}>
    <Container className='container_header'>
      <div className="main_headerrrr_2">
       
      <Navbar.Brand href="/"><img src={logo} className='img__navbar' /></Navbar.Brand>
     
     <div className="navvv_barrrr">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mx-auto w-100  align-items-center justify-content-evenly ">
          <div className="main_headerr_2">
          <div className='links '>
          <Link  to="/" className='navbar__a' >Home</Link>
          <Link  to="/About" className='navbar__a'  >About Us</Link>
          <Link  to="/Story" className='navbar__a'  >Our Story</Link>
          <Link  to="/Vison" className='navbar__a'  >Our Vision</Link>
          </div>
          <div className='btn '>
           <div className="social">
          <a href="https://www.facebook.com/greenrootsorganics" target='_blank' >
                <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/greenrootsorganics/?fbclid=IwAR3g0kZXNW4zZoRIxKF3ySGZ_d0bMh5l2yEws_m8_xA-qwmArK1CKtMdooo" target='_blank'
                
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fgreenrootspk" target='_blank'>
                <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@GreenRootsorganics" target='_blank'>
                <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://wa.me/923209015555"   target="_blank">
                <i class="fa-brands fa-whatsapp" style={{fontSize:'25px', color:"#76C157"}}></i>
                </a>
                <a href="https://www.tiktok.com/@greenroots_organics?is_from_webapp=1&sender_device=pc" target='_blank' >
                <i class="fa-brands fa-tiktok" style={{fontSize:'25px',}}></i>
                </a>
                </div>
                <div className="contact_me">
                <i class="fa-solid fa-phone"></i>
                <a href="tel::+92-21 35303761-4" className='a_num'>:+92-21 35303761-4</a> <br/>
                (Operational Timings: 11:00 – 22:00)
                </div>
          </div>
          </div>
          
          {/* </div> */}
        </Nav>
      </Navbar.Collapse>
      </div>
      </div>  
    </Container>
  </Navbar>
  </div>
  </header>
  )
}

export default Header
import React from 'react';
import './Footer.css'; // Import your CSS file
// import logo from "../assets/Green Roots Logo (2).png"
import logo from "../assets/Dr Essa lockup-01.png"

const Footer = () => {
  return (
    <footer className="herbal-footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src={logo} alt="Herbal Logo" className='logo-animation' />
          </div>
          <div className="info">
            <h3>Contact Us</h3>
            <a href="mailto:info@greenrootspk.com">
              <p  style={{whiteSpace:'nowrap'}}>Email: info@greenrootspk.com</p>
            </a>
            <br />
            <a href="tel:+92-21 35303761-40">          <p style={{whiteSpace:'nowrap'}}>Phone: +92-21 35303761-4</p></a>
            <br />
            <span style={{whiteSpace:'nowrap'}}>(Operational Timings: 11:00 – 22:00)</span>
            <div className="social-icons my-3 d-flex">
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
              <a href="whatsapp://send?phone=920320-9015555">
                <i class="fa-brands fa-whatsapp" style={{fontSize:'25px', color:"#76C157"}}></i>
                </a>
                <a href="https://www.tiktok.com/@greenroots_organics?is_from_webapp=1&sender_device=pc" target='_blank' >
                <i class="fa-brands fa-tiktok" style={{fontSize:'25px',}}></i>
                </a>
            </div>
          </div>
          <div className="info">
            <h3>Address</h3>
            <a href="mailto:greenrootpk@gmail.com">
              <p className='address_p'>Shop 84 & 85,
                The Forum Mall.
                Clifton Block 8, Karachi - 75600</p>
            </a>
            <br />
            <div className="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.070412334192!2d67.03667868790893!3d24.827265544801215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db645555555%3A0x6732abcb273f8847!2sThe%20Forum%20Shopping%20Mall%20Karachi!5e0!3m2!1sid!2s!4v1696080460812!5m2!1sid!2s"
                title="Responsive Map"
                className="iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            {/* &reg Green Roots - Privacy - Terms of service &copy 2020 - 2025  */}
          </div>
 
        </div>
      </div>
    </footer>
  );
};

export default Footer;

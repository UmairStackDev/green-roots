
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Create this CSS file for custom styling
import img from "../assets/Green Roots Pictures/Oil.png";
// import img2 from "../assets/Green Roots Pictures/Slider.png"
import { Container } from 'react-bootstrap';
// import img3 from "../assets/Green Roots Pictures/Slider.png"
import video from "../assets/homeremedy_1.mp4"


const Banner = () => {
    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 100,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     centerMode: true,
       
    // };
  
    return (
        <div className="banner_" >
                 <video src={video} autoPlay muted loop className="slider-video"></video>
        {/* <Container fluid>      <div className="image-slider">
            <Slider {...sliderSettings} className="intro-slider">
                <div>
                    <video src={video} autoPlay muted loop className="slider-video"></video>
                </div>
                <div>
                    <img src={img} alt="Image 1" className="slider-image" />
                </div>
                <div>
                    <img src={img3} alt="Image 2" className="slider-image" />
                </div>
               
            </Slider>
        </div>
        </Container> */}
        </div>

    );
};

export default Banner;

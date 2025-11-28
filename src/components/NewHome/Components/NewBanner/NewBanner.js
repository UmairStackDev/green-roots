import React from 'react';
import './NewBanner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from "../../../../assets/HOME/001.jpg"
import image2 from "../../../../assets/HOME/002.jpg"
import image3 from "../../../../assets/HOME/003.jpg"
import { Link } from 'react-router-dom';
SwiperCore.use([Parallax, Pagination, Navigation]);

function NewBanner() {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
         <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           <img src={image} alt="" />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
           <div className="div">
          <Link to="https://shop.greenrootspk.com/">
           <button>Shop Now</button>
           </Link>
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <img src={image2} alt="" />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          <div className="div">
          <Link to="https://shop.greenrootspk.com/">
           <button>Shop Now</button>
           </Link>
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <img src={image3} alt="" />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          <div className="div">
          <Link to="https://shop.greenrootspk.com/">
           <button>Shop Now</button>
           </Link>
           </div>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NewBanner;

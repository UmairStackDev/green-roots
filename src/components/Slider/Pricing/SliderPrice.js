import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../Assets/Images/Mockups/3.jpg";
import image2 from "../../../Assets/Images/Mockups/4.png";
import image3 from "../../../Assets/Images/Mockups/5.jpg";
import image4 from "../../../Assets/Images/Mockups/6.png";
import image5 from "../../../Assets/Images/Mockups/7.png";
import image6 from "../../../Assets/Images/Mockups/8.png";
import image7 from "../../../Assets/Images/Mockups/9.png";
import image8 from "../../../Assets/Images/Mockups/11.png";
import image9 from "../../../Assets/Images/Mockups/12.png";
import image10 from "../../../Assets/Images/Mockups/13.png";
// import image11 from "../../../Assets/Images/Mockups/14.jpg";
import image12 from "../../../Assets/Images/Mockups/15.png";
import image14 from "../../../Assets/Images/Mockups/17.png";
import "swiper/css";
import "swiper/css/pagination";

function SliderPrice() {
  // const [swiper, setSwiper] = useState(null);


 

  return (
    <div>
      <Swiper
        pagination={false}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:1,
          },
          639: {
            slidesPerView: 2,
          },
          865:{
            slidesPerView:2
          },
          1000:{
            slidesPerView:3
          },
          1500:{
            slidesPerView:3
          },
          1700:{
            slidesPerView:3
          }
      
        }}
        modules={[Autoplay]}
        className="Slider mySwiper"
      >
        <SwiperSlide>
          <div className="boxx">
            <img src={image1} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image2} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image3} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image4} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image5} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image6} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image7} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image8} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image9} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image10} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image12} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxx">
            <img src={image14} alt="image1" />
            <h6>
              Jacket <br /> Back
            </h6>
            <span>$8 - $10</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderPrice;

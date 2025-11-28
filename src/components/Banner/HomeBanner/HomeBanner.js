import BannerPic1 from "../../../assets/homefrontimages/Asthma-capsule.jpeg";
import BannerPic2 from "../../../assets/homefrontimages/Organic-Virgin-Coconut-Oil.jpeg";
import BannerPic3 from "../../../assets/homefrontimages/Thyroid-Hypo-Capsules.jpeg";
import BannerPic4 from "../../../assets/homefrontimages/acidity-medicine-greenrootspk.com_.png";
import BannerPic5 from "../../../assets/homefrontimages/acne-clear-face-wash-greenrootspk.com_.png";
import BannerPic6 from "../../../assets/homefrontimages/acne-diffuser-greenrootspk.com_.png";
import BannerPic7 from "../../../assets/homefrontimages/acne-regime-greenrootspk.com_-600x480.png";
import BannerPic8 from "../../../assets/homefrontimages/activated-charcoal-face-mask-greenrootspk.com_.png";
import BannerPic9 from "../../../assets/homefrontimages/ajwain-leaves-greenrootspk.com_.png";
import BannerPic10 from "../../../assets/homefrontimages/ajwain-seeds-greenrootspk.com_.png";
import BannerPic11 from "../../../assets/homefrontimages/allergy-cure-greenrootspk.com_.png";
import BannerPic12 from "../../../assets/homefrontimages/almond-oil-greenrootspk.com_.png";
import BannerPic13 from "../../../assets/homefrontimages/aloe-vera-oil-greenrootspk.com_.png";
import BannerPic14 from "../../../assets/homefrontimages/amla-oil-greenrootspk.com_.png";
import BannerPic15 from "../../../assets/homefrontimages/amla-powder-greenrootspk.com_.png";
import BannerPic16 from "../../../assets/homefrontimages/anti-dandruff-hair-fall-oil-greenrootspk.com_.png";
import BannerPic17 from "../../../assets/homefrontimages/anti-lice-oil-greenrootspk.com_.png";
import BannerPic18 from "../../../assets/homefrontimages/asgandh-nagori-greenrootspk.com_.png";
import BannerPic19 from "../../../assets/homefrontimages/black-pepper-oil-greenrootspk.com_.png";
import BannerPic20 from "../../../assets/homefrontimages/cardium-90-greenrootspk.com_.png";
import BannerPic21 from "../../../assets/homefrontimages/carrot-seed-oil-greenrootspk.com_.png";
import BannerPic22 from "../../../assets/homefrontimages/grape-seed-oil-greenrootspk.com_.png";
import BannerPic23 from "../../../assets/homefrontimages/oily-hair-oil-greenrootspk.com_.png";
import BannerPic24 from "../../../assets/homefrontimages/olive-oil-greenrootspk.com_.png";
import BannerPic25 from "../../../assets/homefrontimages/onion-oil-greenrootspk.com_.png";
import BannerPic26 from "../../../assets/homefrontimages/pain-killer-massage-oil-greenrootspk.com_.png";
import BannerPic27 from "../../../assets/homefrontimages/paralysis-oil-greenrootspk.com_.png";
import BannerPic28 from "../../../assets/homefrontimages/rose-oil-greenrootspk.com_.png";
import BannerPic29 from "../../../assets/homefrontimages/rose-water-bottle-greenrootspk.com.png";
import BannerPic30 from "../../../assets/homefrontimages/rosemarry-oil-greenrootspk.com.png";
import BannerPic31 from "../../../assets/homefrontimages/saffron-scrub-greenrootspk.com_.png";
import BannerPic32 from "../../../assets/homefrontimages/sandal-orange-scrub-greenrootspk.com_.png";
import BannerPic33 from "../../../assets/homefrontimages/sandalwood-oil-1-greenrootspk.com_.png";
import BannerPic34 from "../../../assets/homefrontimages/skin-glowing-cream-greenrootspk.com.png";
import BannerPic35 from "../../../assets/homefrontimages/skin-glowing-mask-greenrootspk.com.png";
import BannerPic36 from "../../../assets/homefrontimages/sleeping-disorder-greenrootspk.com_.png";
import BannerPic37 from "../../../assets/homefrontimages/sperm-count-2-1-greenrootspk.com_.png";
import BannerPic38 from "../../../assets/homefrontimages/sugar-2-greenrootspk.com_.png";
import BannerPic39 from "../../../assets/homefrontimages/tea-tree-oil-greenrootspk.com_.png";
import BannerPic40 from "../../../assets/homefrontimages/tooth-powder-medicine-greenrootspk.com_.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "swiper/css";

import "./HomeBanner.css";

function HomeBanner() {
  return (
    <div className="banner_Home">
      <Container fluid>
        <div className="text">
          <div className="left">
            <div
              className="content"
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h1>
              Signature formulations by Dr Essa
              </h1>
            </div>

            <p
              data-aos="fade-right"
              data-aos-offset="00"
              data-aos-delay="1300"
              data-aos-duration="1000"
              align="justify"
            >
             Green Roots was established fifteen years ago with a vision to source 100% pure herbs, oils and spices from the most preserved natural heritages, eco systems & conservations across the world to manufacture beauty products, wellness products, medicines and health related treatments by experimenting and producing products for all age groups.
            </p>
            <div
              className="btnn"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
             <div className="button_1">
                <button className="button button_2">
                  <Link to="https://shop.greenrootspk.com/">
                  Shop Now
                  {/* whatsapp://send?phone=9203462222786 */}
                  </Link></button>
                  <a href="https://wa.me/9203462222786" target="_blank">
                <button className="button">Get an Appointment</button>
                </a>
                </div>
            </div>
          </div>
          <div className="right ">
            <div className="one">
            <div className="imgg">
                <img src={BannerPic1} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic2} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic3} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic4} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic5} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic6} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic7} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic8} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic9} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic10} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic11} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic12} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic13} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic14} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic15} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic16} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic17} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic18} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic19} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic20} alt="banner" />
              </div>
          
            </div>
            <div className="two">
            <div className="imgg">
                <img src={BannerPic21} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic22} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic23} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic24} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic25} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic26} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic27} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic28} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic29} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic30} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic31} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic32} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic33} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic34} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic35} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic36} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic37} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic38} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic39} alt="banner" />
              </div>
              <div className="imgg">
                <img src={BannerPic40} alt="banner" />
              </div>      
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeBanner;

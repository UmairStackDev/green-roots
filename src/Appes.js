import { useEffect, useState } from "react";

import {
  Home,
} from "./Pages/Index";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'photoswipe/dist/photoswipe.css'
import "./Appes.css";

import Headertwo from "./header/Headertwo";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
// import PopupComponent from "./Modal/PopupComponent";
import Navbar from "./components/Navbar";




function Appes() {
  const [Loading, setLoading] = useState(false);
  const [tarr, setTarr] = useState(false);
  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // },4500);
    AOS.init({
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  window.addEventListener("scroll", function () {
    let tar = this.window.scrollY;

    if (tar > 700) {
      setTarr(true);
      // console.log("done");
    } else {
      setTarr(false);
    }
    // console.log(tar);
  });

  const setpagelocation = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  return (
    <>

      <>
        {/* <PopupComponent /> */}
        {/* <Header />
          <Headertwo/> */}
        <Navbar />
        <Home />

        <Footer />

        <div
          className="scrolling"
          style={tarr === true ? { opacity: "1" } : { opacity: "0" }}
          onClick={setpagelocation}
        >
          <span>Scroll</span>
          <span className="scroll_line">
            <span className="scroll_bar"></span>
          </span>
        </div>


        <div className="whats_icon">
          <a
            href="https://wa.me/923209015555"
 target="_blank"

          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </>

    </>
  );
}

export default Appes;

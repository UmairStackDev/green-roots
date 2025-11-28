import React, { useRef } from "react";
import HomeBanner from "../components/Banner/HomeBanner/HomeBanner";
import Image4 from "../assets/images/digitizing/2.png";
import Image5 from "../assets/images/digitizing/3.png";
import Image6 from "../assets/images/digitizing/8.png";
import Image7 from "../assets/images/vectorwork/1.png";
import Image8 from "../assets/images/patchwork/2.jpg";
import { useState } from "react";
import { useEffect } from "react";
// import Slider_comp from "../Components/Slider/Home/Slider_comp";
import "../assets/Css/home.css";

function Home() {
  // let mainHeight, serviceHeight;
  let arr = [Image4, Image5, Image6, Image7, Image8];

  let [tabPic, setTabPic] = useState(arr[0]);

  const handleChange = (e) => {
    console.log(e);
    if (e === "LogoDigitizing") {
      setTabPic(arr[0]);
    }
    if (e === "AppliqueDigitizing") {
      setTabPic(arr[1]);
    }
    if (e === "HatDigitizing") {
      setTabPic(arr[2]);
    }
    if (e === "VectorArtConversions") {
      setTabPic(arr[3]);
    }
    if (e === "CustomPatchwork") {
      setTabPic(arr[4]);
    }
  };

  const ref = useRef();
  const ref1 = useRef();

  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);

  const setOne = () => {
    setInterval(() => {
      setSelectOne(true);
      // console.log("done");
    }, 3000);
  };
  const setOne_ = () => {
    setInterval(() => {
      setSelectOne(false);
      // console.log("done");
    }, 8000);
  };

  const setTwo = () => {
    setInterval(() => {
      setSelectTwo(true);
      // console.log("done2");
    }, 5000);
  };
  const setTwo_ = () => {
    setInterval(() => {
      setSelectTwo(false);
      // console.log("done2");
    }, 8000);
  };
  useEffect(() => {
    setOne();
    setOne_();
    setTwo();
    setTwo_();
  }, []);

  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  // useEffect(() => {
  //   mainHeight = ref.current?.clientHeight;
  //   console.log(ref.current?.clientHeight);
  //   serviceHeight = ref1.current?.clientHeight;
  //   console.log(ref1.current?.clientHeight);
  //   // console.log(window.screenY);
  // }, []);

  // window.addEventListener("scroll", function (e) {
  // e.preventDefault()
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 900) {
  //     console.log("done");
  //   }
  //   // let lastY = 0;
  //   // if (window.scrollY >= 900) {
  //   //   e.target.scrollTop = lastY;
  //   //   console.log(e.target.scrollTop);
  //   // } else lastY = e.target.scrollTop;

  //   // 960
  // });

  // useEffect(() => {
  //   window.scrollTo(0, 960);
  // }, []);
  return (
    <main className="homePage" ref={ref}>
      <HomeBanner />

    </main>
  );
}

export default Home;

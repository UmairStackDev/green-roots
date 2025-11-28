
import Typewriter from "typewriter-effect";
import "./PreLoader.css";
import { useEffect, useState } from "react";
function PreLoader() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <div className="preloader">

      <img src={image1} alt="image1" className="preloader_img" />

      {Loading === false ? <div className="tec"><Typewriter
        options={{
          strings: ["Welcome to MCS Digitizing"],
          autoStart: true,
          loop: false,
          delay: 70,
        }}
      />
      <Typewriter
        options={{
          strings: ["The World Of Creativity"],
          autoStart: true,
          loop: false,
          delay: 70,
        }}
      />
      </div>:
      <div
      className={`preloader_inner`}
    >
      <img src={Logo1} alt="Logo" className="logo logo-1" />
      <img src={Logo2} alt="Logo" className="logo logo-2" />
    </div> }
    </div>
  );
}

export default PreLoader;

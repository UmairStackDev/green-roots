// import React, { useEffect } from "react";

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#fff',
  };

var options = {
  damping: 0.07,
  plugins: {

    overscroll: { ...overscrollOptions },

  },
};

const Scroll = () => {
  // useEffect(() => {
  //   Scrollbar.use(OverscrollPlugin)
  //   Scrollbar.init(document.body, options);
  // }, []);
  return null;
};

export default Scroll;

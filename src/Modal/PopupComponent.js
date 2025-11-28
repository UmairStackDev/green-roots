import React, { useState, useEffect } from 'react';
import './PopupComponent.css'; // Import your CSS file
import popupimg from '../assets/50percentdiscount.jpg'
const PopupComponent = () => {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(true);

  // useEffect to trigger the popup display after component mounts
  useEffect(() => {
    // You can set a timeout to delay the popup display if needed
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Adjust the delay time as needed

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that this effect runs only once after mount

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Render the popup if showPopup is true
  return (
    <>
      {showPopup && (
        <div className="popup">
           <img src={popupimg} alt="" />
          <div className="popup-content d-flex " style={{justifyContent:'end'}}>
         
            <button onClick={closePopup} style={{background:'none' ,border:'none'}}><i class="fa-solid fa-xmark" style={{color:'#000',fontSize:"20px"}}></i></button>
          </div>
         
        </div>
      )}
    </>
  );
};

export default PopupComponent;

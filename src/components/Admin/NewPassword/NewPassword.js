import React, { useState } from 'react';


import "./NewPassword.css"
const NewPassword = () => {
  const [newPassword, setNewPassword] = useState({
    new_password: '',
    confirm_password: '',
    otpcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="container-fluid my-3 signinform ">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-6  newpassword">
              <div className='pt-2'>
                <div class="gradient-text">Create New Password</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                
               
               
               <label>
               New Password *
                 <input
                   type="text"
                   name="new_password"
                   value={newPassword.new_password}
                   onChange={handleChange}
                   required
                   
                 />
               </label>
               <label>
               Confirm Password *
                 <input
                   type="text"
                   name="confirm_password"
                   value={newPassword.confirm_password}
                   onChange={handleChange}
                   required
                   
                 />
               </label>
               <label>
               OTP Code *
                 <input
                   type="text"
                   name="otpcode"
                   value={newPassword.otpcode}
                   onChange={handleChange}
                   required
                   
                 />
               </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPassword

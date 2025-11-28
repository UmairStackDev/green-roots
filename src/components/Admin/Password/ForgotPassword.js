import React, { useState } from 'react';


import "./ForgotPassword.css"
const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
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
      <div className="container-fluid my-3 signinform  signinform_9">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-6  password">
              <div className='pt-2'>
                <div class="gradient-text">Forgot Password</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                
               
               
               <label>
               E-mail *
                 <input
                   type="text"
                   name="email"
                   value={email.email}
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

export default ForgotPassword

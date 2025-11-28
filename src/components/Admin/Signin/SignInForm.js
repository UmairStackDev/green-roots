import React, { useState } from 'react';
import "./SignInForm.css";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    password: '',
    showPassword: false, // New state to track password visibility
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission, e.g., send data to the server
  };
  const handleTogglePassword = () => {
    setSignInData({
      ...signInData,
      showPassword: !signInData.showPassword,
    });
  };
  return (
    <>
      <div className="container-fluid my-3 signinform signinform_7">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-6 card_sign">
              <div className='pt-2'>
                <h1 className="gradient-text">Login</h1>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <label>
                    User ID *
                    <input
                      type="text"
                      name="userId"
                      value={signInData.userId}
                      onChange={handleChange}
                      required
                      style={{
                        width:"95%",
                      }}
                    />
                  </label>
                  <label style={{ marginBottom: '10px',  }}>
                    Password *
                    <input
                      type={signInData.showPassword ? 'text' : 'password'}
                      name="password"
                      value={signInData.password}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: 'calc(100% - 30px)', // Adjust the width as needed
                        marginRight: '10px',
                        // Additional styling:
                        // Add background color on focus
                        ':focus': {
                          backgroundColor: '#f0f0f0',
                          
                        },
                        // Add transition for smoother changes
                        transition: 'background-color 0.3s ease',
                        width:"95%",
                      }}
                    />
                    <span
                      onClick={handleTogglePassword}
                      style={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        marginLeft: '-40px', // Adjust the position of the eye icon
                      }}
                    >
                      {signInData.showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                  </label>

                  <button type="submit">Log In</button>
                  <a href="/SignUp" className='forgotpassword'>Forgot Password</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

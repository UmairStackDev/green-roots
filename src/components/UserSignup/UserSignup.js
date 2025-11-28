import React, { useState } from 'react';
import axios from 'axios';
import "./UserSignup.css"; // Assuming this is your custom CSS file
import { useNavigate } from 'react-router-dom';
const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!firstName || !lastName || !email || !contact || !password) {
      // Handle the case where any field is empty (show error message, etc.)
      console.log('Please fill in all the required fields.');
      return;
    }
     // Navigate to the checkout form
     navigate('/CheckoutForm');
    axios
      .post('https://newbie.greenrootspk.com/addUser', { firstName, lastName, email, contact, password })
      .then((res) => {
        console.log(res);
        // navigate('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container-fluid my-3 signinform signinform_0 signinform_5 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-10 UserSignup user_sign_up">
              <div className='pt-2'>
                <div className="gradient-text">User Registration</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        First Name *
                        <input
                          type="text"
                          name="firstName"
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        Last Name *
                        <input
                          type="text"
                          name="lastName"
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      E-mail *
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number *
                      <input
                        type="text"
                        name="contact"
                        onChange={(e) => setContact(e.target.value)}
                        className="form-control"
                        required
                      />
                    </label>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        Password *
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          required
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        Confirm Password *
                        <input
                          type="password"
                          className="form-control"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;

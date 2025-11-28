import React, { useState } from 'react';


import "./SignUp.css"
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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
      <div className="container-fluid my-3 signinform signinform_0 signinform_4">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-6 form_form form_form_3">
              <div className='pt-2'>
                <div class="gradient-text">User Registration</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="first d-flex gap-4     ">
                    <label>
                      First Name *
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Last Name *
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <label>
                    E-mail *
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                 
                  <div className="first d-flex gap-4 align-items-end first_2 ">
                  <label>
                    User Role *
                    <select className='select_2'>
                      <option value="">Admin </option>
                      <option value="Super Admin">Super Admin</option>  
                      <option value="User">User</option>  
                    </select>
                    </label>
                    {/* Add similar fields for other form inputs */}
                    <label>
                      User ID *
                      <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="first d-flex gap-4">
                  <label>
                    Password *
                    <input
                      type="text"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Confirm Password *
                    <input
                      type="text"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp

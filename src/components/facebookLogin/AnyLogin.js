import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { Form, Button, FormGroup, FormCheck } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./AnyLogin.css"
function AnyLogin() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful login with Google
    // You may want to perform additional actions here, such as authentication or user profile setup.
  };
  const responseFacebook = (response) => {
    console.log(response);
    // Handle successful login with Facebook
    // You may want to perform additional actions here, such as authentication or user profile setup.
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailIsValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordIsValid(true);
  };

  const handleRememberPasswordChange = () => {
    setRememberPassword(!rememberPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email) {
      setEmailIsValid(false);
      return;
    }

    if (!password) {
      setPasswordIsValid(false);
      return;
    }

    // Add your form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Password:', rememberPassword);

    // Navigate to the checkout form
    navigate('/CheckoutForm');
  };
  return (
    <div>
      <section className="AnyLogin" style={{ backgroundColor: '#fff' }}>
        <div className="container py-5 h-100 container1" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{ width: '37% !important ' }}>
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center" style={{ height: '100vh' }}>

                  <h3 className="mb-5" style={{ color: 'red' }}>Sign in</h3>

                  <Form onSubmit={handleSubmit}>
      <FormGroup controlId="typeEmailX-2" className="mb-4">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
          isInvalid={!emailIsValid}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup controlId="typePasswordX-2" className="mb-4">
        <Form.Label>Password</Form.Label>
        <div className="input-group">
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            isInvalid={!passwordIsValid}
            required
          />
          <Button variant="outline-secondary" onClick={handleTogglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </div>
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
      </FormGroup>

     

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <FormCheck
                      type="checkbox"
                      id="form1Example3"
                      checked={rememberPassword}
                      onChange={handleRememberPasswordChange}
                    />
                    <label htmlFor="form1Example3"> Remember password</label>
                  </div>
                  <div className="manage d-flex" style={{ flexDirection: 'column', gap: '20px' }}>

                    <Link to='/UserSignup'>
                      <button className="btn btn-primary btn-lg btn-block" type="submit">SignUp</button>
                    </Link>
                  </div>
                  <hr className="my-4" />

                  <GoogleLogin
                    clientId="174449184458-ognc3segfq78k6kqtnr1mn8nh4n02t81.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    redirectUri="http://localhost:3000"
                  />

                  <FacebookLogin
                    appId="281872264827891"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    redirectUri="http://localhost:3000" // Make sure this matches one of the URIs in Facebook App settings
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnyLogin

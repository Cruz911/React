import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Footer from './Footer';
import {Link} from 'react-router-dom'

const Login = () => {

  const [ redirect, setRedirect ] = useState(null);

    useEffect(() => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const loginPage = document.getElementById('loginPage');

      if(signUpButton){
      signUpButton.addEventListener('click', () => loginPage.classList.add('right-panel-active'));
      }
      if(signInButton){
      signInButton.addEventListener('click', () => loginPage.classList.remove('right-panel-active'));
      }
      return () => {
        if(signUpButton){
        signUpButton.removeEventListener('click', () => loginPage.classList.add('right-panel-active'));
        }
        if(signInButton){
        signInButton.removeEventListener('click', () => loginPage.classList.remove('right-panel-active'));
        }
      }
    })
    useEffect(() => {
      const form = document.getElementById('sign-in-form');
      if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email)
        console.log(password)
      
        if (email === 'test@gmail.com' && password === 'test'){
          setRedirect('/dashboard');
        }
      return () => {
        form.removeEventListener('submit', (e) => {
        e.preventDefault();
      const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email)
        console.log(password)
        if (email === 'test@gmail.com' && password === 'test'){
          setRedirect('/dashboard');
        }
      }
      )
    }}, []);}
  });

    if (redirect !== null){
      return <Redirect to={redirect} />
    }
    else return (
    <>
    <div className="single-page">
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            {/* <Link className="d-block" to="/" rel="home"><img className="d-block" src="images/logo.png" alt="logo"/></Link> */}
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li  className="current-menu-item"><Link to="/login">Sign Up/In</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <Link className="d-flex justify-content-center align-items-center" to="/bot">Ask Tanaka!</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Sign Up/In</h2>

                    <div data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><Link to="/">Home</Link></li>
                            <li>Sign Up/In</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </header>

      <div data-aos-delay="100" className="container" id="loginPage">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <Link to="/register-hosp" className="register-links">Sign up your hospital</Link>
            <Link to="/register-personal" className="register-links">Sign up as a healthcare provider</Link>
            <Link to="/register-patient" className="register-links">Sign up as a patient</Link>
          </form>
        </div>

        <div className="form-container sign-in-container">
        <form id="sign-in-form">
            <h1>Sign In</h1>
            <div className="social-container">
              <Link to="#fab" className="social"><i className="fa fa-facebook"></i></Link>
              <Link to="#fab" className="social"><i className="fa fa-google-plus"></i></Link>
              <Link to="#fab" className="social"><i className="fa fa-linkedin"></i></Link>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <Link to="#ab">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal details</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, friend!</h1>
              <p>Enter your personal details and start journey with us!</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

  </div>
        <Footer/>
        </>
    );
  };

  export default Login;
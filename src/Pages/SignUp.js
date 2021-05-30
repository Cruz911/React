import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
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

        <div className="form-container sign-in-container">
        <form id="sign-in-form">
            <h1>Sign Up</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="district" placeholder="District" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

       
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, friend!</h1>
              <p>Already have an account. Sign In here!</p>
             <Link to='/login'><button className="ghost" id="signUp">Sign In</button></Link>
            </div>
          </div>
        </div>
      </div>

  </div>
        <Footer/>
        </>
    );
  };

  export default SignUp;
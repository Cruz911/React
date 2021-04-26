/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from './Footer';
import img from '../images/hiv.jpeg'
import ribbon from '../images/ribbon.jpeg'
import { Link } from 'react-router-dom';
// import background from '../images/background.jpg'

const Home = () => {
  return (
    <>
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                           {/* <Link className="d-block" to="/" rel="home"><img className="d-block" src={logo} alt="logo" /></Link> */}
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li className="current-menu-item"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/login">Sign Up/In</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <Link className="d-flex justify-content-center align-items-center" to="/bot">Need Advice?</Link>
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

        <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap" style={{backgroundImage: "url('https://images.unsplash.com/photo-1576072845557-22e1b5408c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80')"}}>
                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1 >Welcome  </h1>
                                    </header>

                                    <div className="entry-content mt-4">
                                        <p>Help and information about HIV/AIDS at your fingertips. Sign Up today and enjoy our great services</p>
                                    </div>

                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                        <Link to="/about" className="button gradient-bg">Read More</Link>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </div>
    </header>

    <div className="med-history" id="about">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>What is MedRec?</h2>

                    <p>MedRec is a digital solution to the health record system. It seeks to replace the traditional paper health records system by providing an easy way to save, sort, retrieve, and visualize record data in a simple yet secured interface. <br/> MedRec is constantly maintained by a group of health-tech enthusaists who are committed to improving it's quality and improving user experience.</p>

                    <Link className="d-inline-block button gradient-bg" to="/about">Read More</Link>
                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src={ribbon} alt=""/>
                </div>
            </div>
        </div>
    </div>


    <div className="med-history" id="about">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>How Does It Work?</h2>

                    <p>It all starts with registering your hospital. Once your healthcare center is registered with us, you as a healthcare provider can sign up as a user under your hospital to start saving up health records of patients you see in your hospital.
                      <br/> You can then sort through, search and see all your saved records whenever required. Moreso, with appropriate authorization, you could look up records of other patients saved under your hospital and even in the country!
                      <br/> What more? You can save up your record even while offline and it gets uploaded automatically when you have internet access! See your patients data statistics with our data visualizations and lots more!
                    </p>

                    <Link className="d-inline-block button gradient-bg" to="/login">Sign Up</Link>
                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src={img} alt=""/>
                </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}
export default Home;
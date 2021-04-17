/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from './Footer';
import nurses from '../images/nurses.png'

const About = () => {
    return (
        <>
    <div className="single-page">
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            {/* <a  data-aos="fade-down" className="d-block" href="/" rel="home"><img className="d-block" src="images/logo.png" alt="logo"/></a> */}
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li><a href="/">Home</a></li>
                                <li className="current-menu-item"><a href="/about">About us</a></li>
                                <li><a href="/login">Sign Up/In</a></li>
                                <li><a href="/contact">Contact</a></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <a className="d-flex justify-content-center align-items-center" href="tel:=2348160983729"><img src="images/emergency-call.png" alt=""/> Call us!</a>
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
                    <h1 >About us</h1>

                    <div data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        {/* <img className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/> */}
    </header>

    <div className="med-history">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>What is MedRec?</h2>
                    <p data-aos-delay="100">MedRec is a digital solution to the health record system. It seeks to replace the traditional paper health records system by providing an easy way to save, sort, retrieve, and visualize record data in a simple yet secured interface. <br/> MedRec is constantly maintained by a group of health-tech enthusaists who are committed to improving it's quality and improving user experience.</p>
                    <p  data-aos-delay="200">It all starts with registering your hospital. Once your healthcare center is registered with us, you as a healthcare provider can sign up as a user under your hospital to start saving up health records of patients you see in your hospital.
                      <br/> You can then sort through, search and see all your saved records whenever required. Moreso, with appropriate authorization, you could look up records of other patients saved under your hospital and even in the country!
                      <br/> What more? You can save up your record even while offline and it gets uploaded automatically when you have internet access! See your patients data statistics with our data visualizations and lots more!
                    </p>

                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src={nurses} alt=""/>
                </div>
            </div>
        </div>
    </div>

    <div className="med-history">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>Why use MedRec?</h2>
                    <div data-aos-delay="100">
                        <ul>
                            <li><strong>Easy, Fast, Reliable:</strong> Your patients don't have to wait the whole day for their case notes before seeing you anymore. With one click, all their saved records come up in seconds, no matter how far into the past!</li>
                            <li><strong>Statistics, data analysis and Visualizations:</strong> With MedRec, computing health statistics has not been easier. With appropriate access, you can know how many people under 5 years old have malaria in Nigeria, Lagos state or any location at all!</li>
                            <li><strong>Vertical integration across levels of healthcare provision:</strong> MedRec seeks to solve the disjoint between primary, secondary and tertiary healthcare providers, making health records of patients available from wherever they've been managed prior to index presentation.</li>
                        </ul>
                    </div>

                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src="images/medrec/img5.jpeg" alt=""/>
                </div>
            </div>
        </div>
    </div>


    </div>
    <Footer />
        </>
    )
}
export default About;
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'

const Contact = () => {
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
                                <li><Link to="/login">Sign Up/In</Link></li>
                                <li className="current-menu-item"><Link to="/contact">Contact</Link></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <Link className="d-flex justify-content-center align-items-center" to="/bot">Ask Tanaka</Link>
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
                    <h1 >Contact</h1>

                    <div data-aos-delay="200" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </header>


    <div className="contact-form">
        <div className="container">
            <div data-aos="fade-up" className="row">
                <div className="col-12">
                    <h2>Get in Touch</h2>
                </div>

                <div className="col-12  col-md-4">
                    <input type="text" placeholder="Name"/>
                </div>

                <div className="col-12 col-md-4">
                    <input type="email" placeholder="E-mail"/>
                </div>

                <div className="col-12 col-md-4">
                    <input type="text" placeholder="Subject"/>
                </div>

                <div className="col-12">
                    <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                    <input type="submit" name="" value="Send Message" className="button gradient-bg"/>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
    )
}
export default Contact;
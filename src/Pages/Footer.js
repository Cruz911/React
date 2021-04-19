import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="site-footer">
        <div className="footer-widgets">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                        <div  data-aos="fade-up" className="foot-contact">
                            <h2>Contact</h2>

                            <ul className="p-0 m-0">
                                <li><span>Address:</span>13 Linby CL, Avondale West, Harare.</li>
                                <li><span>Phone:</span>+263 779 941 094</li>
                                <li><span>Email:</span>joelchadambuka@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                        <div  data-aos="fade-up" className="foot-links">
                            <h2>Links</h2>

                            <ul className="p-0 m-0">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about#faq">FAQ</Link></li>
                                <li><Link to="/login">Sign Up/In</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;
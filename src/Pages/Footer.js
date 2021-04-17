import React from 'react'

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
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/about#faq">FAQ</a></li>
                                <li><a href="/login">Sign Up/In</a></li>
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
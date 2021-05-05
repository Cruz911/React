import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Tips extends Component {
    state = {  }
    render() { 
        return ( 
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
                                            <li><Link to="/notifications">Notifications</Link></li>
                                            <li><Link to="/medical-records">Medical Records</Link></li>
                                            <li><Link to="/tips">Tips</Link></li>
            
                                            <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                                <Link className="d-flex justify-content-center align-items-center" to="/bot">Ask Tanaka</Link>
                                            </li>
                                            <li><Link to="/#">Sign Out</Link></li>
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
                                <h1 >Tips</h1>
            
                                <div data-aos-delay="200" className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Tips</li>
                                    </ul>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </header>
            </div>
         );
    }
}
 
export default Tips;
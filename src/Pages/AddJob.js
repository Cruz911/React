import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AddJob = () => (
    <div className="add-record single-page">
        <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li  className="current-menu-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

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
                    <h2>Add Job</h2>

                    <div data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li>Add Jobs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </header>

    <div className="add-record-container row d-flex justify-content-center">
        <form id="add-record-form" className="d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-12">

            <input type="name" name="email" placeholder="Organisation Email" /> <br/>
            <input type="text" name="jobtitle" placeholder="Job Title" /> <br/>
            <input type="text" name="patientnumber" placeholder="Number of Patients" /> <br/>
            <input type="text" name="status" placeholder="Status" /> <br/>
            <input type="text" name="district" placeholder="District" /> <br/>

            <textarea placeholder="Job Description"></textarea> <br/>
            <div className="d-flex">
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <Footer />
    </div>
)

export default AddJob;
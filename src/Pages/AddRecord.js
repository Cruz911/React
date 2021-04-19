import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AddRecord = () => (
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
                    <h2>Add Patient Record</h2>

                    <div data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li>Add Patient Records</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </header>

    <div className="add-record-container row d-flex justify-content-center">
        <form id="add-record-form" className="d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-12">

            <input type="name" name="patient name" placeholder="Patient Name" /> <br/>
            <input type="number" name="age" placeholder="Age" /> <br/>
            <select>
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select> <br/>
            <input type="text" name="occupation" placeholder="Occupation" /> <br/>
            <select>
                <option value="">Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="single-parent">Single Parent</option>
            </select> <br/>

            <input type="text" name="address" placeholder="Address" /> <br/>
            <select>
                <option value="">Religion</option>
                <option value="christianity">Christianity</option>
                <option value="islam">Islam</option>
                <option value="traditional">Traditional Religion</option>
                <option value="others">Others</option>
            </select> <br/>
            <input type="number" name="phone" placeholder="Phone Number" /> <br/>

            <textarea placeholder="Presenting Complaints (summary)"></textarea> <br/>
            <textarea placeholder="Relevant General Examination Findings"></textarea> <br/>
            <textarea placeholder="Relevant Systemic Examination Findings"></textarea> <br/>
            <textarea placeholder="Investigations Ordered"></textarea> <br/>
            <textarea placeholder="Relevant Investigation results"></textarea> <br/>
            <input type="text" name="diagnosis" placeholder="Diagnosis/Impression" /> <br/>
            <textarea placeholder="Management Plan"></textarea><br/>

            <div className="d-flex">
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <Footer />
    </div>
)

export default AddRecord;
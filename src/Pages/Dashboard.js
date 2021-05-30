import React, { useState } from 'react';
import Footer from './Footer';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [ redirect, setRedirect ] = useState(null);


const handleClick = (e) => {
    const clickedBtn = e.target.value;
    clickedBtn === 'add-record' ? setRedirect("/add-record"):
    clickedBtn === 'existing-patients' ? setRedirect("/my-records"):
    clickedBtn === 'patient-schedule' ? console.log('appointments'):
    clickedBtn === 'patient-jobs' ? setRedirect('/add-job'):
    clickedBtn === 'patient-aid' ? setRedirect('/add-aid'):
    clickedBtn === 'search-database' ? console.log('retrieve from database'):
    clickedBtn === 'data-visualization' ? setRedirect("/visualise"):
    console.log('click');
};

if (redirect !== null){
    return <Redirect to={redirect} />
}
else
 return (
    <div className="single-page">
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
                    <h2 data-aos="fade-up">Dashboard</h2>

                    <div data-aos="fade-up" data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><Link to="/">Home</Link></li>
                            <li>Dashboard</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        {/* <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/> */}
    </header>

        <div className="container dashboard" data-aos="fade-up">
        <ul className="list-group list-group-flush d-flex fa-ul">
            <li className="list-group-item">
                <button onClick={handleClick} value="add-record" type="button" className="d-flex justify-content-left align-items-center">
                <i className="fa fa-user fa-3x" aria-hidden="false"></i> Add Patient</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="existing-patients"  type="button"className="d-flex justify-content-left align-items-center">
                <i className="fa fa-archive fa-3x" aria-hidden="false"></i> Existing  Patient Records</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="patient-schedule"  type="button"className="d-flex justify-content-left align-items-center">
                <i className="fa fa-calendar-check-o fa-3x" aria-hidden="false"></i> Patient Schedule</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="search-database"  type="button"className="d-flex justify-content-left align-items-center">
                <i className="fa fa-database fa-3x" aria-hidden="false"></i> Search our database</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="data-visualization"  type="button"className="d-flex justify-content-left align-items-center"><i className="fa fa-area-chart fa-3x" aria-hidden="false"></i> Data visualization</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="patient-jobs"  type="button"className="d-flex justify-content-left align-items-center">
                <i className="fa fa-calendar-check-o fa-3x" aria-hidden="false"></i> Add Jobs</button>
            </li>
            <li className="list-group-item">
                <button onClick={handleClick} value="patient-aid"  type="button"className="d-flex justify-content-left align-items-center">
                <i className="fa fa-calendar-check-o fa-3x" aria-hidden="false"></i> Add Aid</button>
            </li>
        </ul>
        </div>
        <Footer />
    </div>
)
}

export default Dashboard;
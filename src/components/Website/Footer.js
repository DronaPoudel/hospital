import React from 'react'
import './componentstyles.css'
import Hospital from './assets/hospital.png'
function Footer() {
    return (
        <div>
            <div className="Footer-grid">
                <div className="section1">
                    <div className="Logo">
                    </div>
                    <h3>Hospital management system</h3>
                    <img src={Hospital} alt=""/>
                </div>
                <div className="section2">
                    <h4>Services</h4>
                    <ul>
                        <li>Doctor Appointment</li>
                        <li>Case Tracking</li>
                        <li>Online Report</li>
                        <li>In app presciption</li>
                    </ul>
                    </div>
                <div className="section3">
                    <h3>Links</h3>
                    <p><a href="#">Client</a></p>
                    <p><a href="#">Doctor</a></p>
                    <p><a href="#">Hospital</a></p>
                    <p><a href="#">Login</a></p>


                </div>
                <div className="section4">
                    <h3>Follow us</h3>
                    <p>Find us on social media</p>

                </div>
            </div>
            <div className = "below-footer">
                <p>&#169;	Guras Tech</p>
            </div>
        </div>
    )
};

export default Footer

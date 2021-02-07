import React from 'react'
import './componentstyles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from './assets/logo.png'
function Navbar() {
    return (
        <div className = "navbar">
            {/* <container> */}
                <div className="logo">
                    {/* <img src="../../../public/logo.png" alt="Logo"/> */}
                    <img src={logo} alt=""/>
                </div>
                <div className="nav-main">
                    <ul>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="action-area">
                    <button><Link to="/signin">login</Link></button>
                </div>
            {/* </container> */}
        </div>
    )
}

export default Navbar

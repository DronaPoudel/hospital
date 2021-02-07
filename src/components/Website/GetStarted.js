import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './componentstyles.css'
function Introsection() {
    return (
        <div>
            <div className="getstarted-section">
                <h3>Get Started</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quod et esse quos asperiores commodi doloremque iure, aut atque quibusdam?</p>
                <Link to="/signup"><button type = "submit">Register</button></Link>
            </div>
        </div>
    )
}

export default Introsection


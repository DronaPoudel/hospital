import React from 'react'
import './componentstyles.css'
import { Container } from 'semantic-ui-react'
import hospitalLogo from './images/hospital.png'
function header() {
    return (
        <div>
            <div className="header d-flex">
            <Container textAlign='center'>
                <div className="d-flex">
                    <img src= {hospitalLogo} alt=""/>
                    <h1>MERIDIAN HOSPITAL</h1>
                </div>
            </Container>
            </div>
        </div>
    )
}

export default header

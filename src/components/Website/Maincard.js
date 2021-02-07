import React from 'react'
import featureImage from './assets/hospital.png'
import {Link} from 'react-router-dom'
function Maincard(props) {
    
    return (
        <>
        <div className="card-single ">
            <img src={featureImage} alt="service icon"/>
            <h4>Hospital</h4>
            <Link to="/hospital"><button>continue</button></Link>
            
        </div>
        <div className="card-single ">
            <img src={featureImage} alt="service icon"/>
            <h4>Client</h4>
            <Link to="/client"><button>continue</button></Link>
        </div>
        <div className="card-single ">
            <img src={featureImage} alt="service icon"/>
            <h4>Doctor</h4>
            <Link to="/doctor"><button>continue</button></Link>
        </div>
        </>
    )
}

export default Maincard;

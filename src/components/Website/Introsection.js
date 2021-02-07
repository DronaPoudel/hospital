import React from 'react'
import FeatureImage from './assets/healthcare.png'

function Introsection() {
    return (
        <div>
            <div className="intro-section">
                    <div className="container">
                        <div className="introsection-left">
                            <h3>Total Health care <br/> Solution</h3>
                            <p>We are online health solution platform. We are online health solution platform</p>
                        </div>
                        <div className="introsection-right">
                            <img src={FeatureImage} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Introsection


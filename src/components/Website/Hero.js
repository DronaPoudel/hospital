import React from 'react'
import Navigation from './Navbar'
import HeromainFeatures from './HeromainFeatures'

function Hero() {
    
    return (
        <div className= "hero">
            <Navigation />
            <div className="hero-content">
                <h1>Hospital management System</h1>
            </div>
            <div className="hero-bottom-content">
                <HeromainFeatures />
                
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import './componentstyles.css'
const AvailDays = [0, 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
function DocAvaibility() {
    return (
        <div>
            <div className="days">
                <div className="time">
                    <p><span>11AM</span>-<span>2PM</span></p>
                </div>
            </div>
        </div>
    )
}

export default DocAvaibility

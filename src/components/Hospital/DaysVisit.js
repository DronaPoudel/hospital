import React from 'react'
import './componentstyles.css'
const DaysVisit = [
    {
        id : '1',
        day : 'Sun'
    },
    {
        id : '2',
        day : 'Mon'
    },
    {
        id : '3',
        day : 'Tue'
    },
]

    function DayVisits(props){
        return (
            <div >
                <h6>{props.day}</h6>
                <div className = "Visittimes">
                    <input type="time"/> - <input type="time"/>
                </div>   
            </div>
        )
    }
    

export default DayVisits

import React from 'react'
import './componentstyles.css'

import DaysVisit from './DaysVisit'
import DepartData from './Departments.json'
function DoctorsInput() {
    
    return (
        
        <div>
            <div className="hospital-form">
                <form>
                    <div className="hosformGrid">
                        <div className="doc-name">
                            <input type="text"placeholder = "Doctor Name"/>
                        </div>
                        <div className="doc-depart">
                            <label htmlFor="Doctor-Department">Department:</label>
                                <select id="Depart" name="Departs" value = "Select Depart">
                                {DepartData.map ((Depart) => {
                                    return(
                                        <option value="{Depart.Department}">{Depart.departmentName }</option>
                                    )
                                })}
                                    {/* <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option> */}
                                </select>
                            {/* <input type="dropdown"placeholder = "Select Department"/> */}
                        </div>
                        <div className="degree">
                            <label htmlFor="">Specialization/ Degree</label>
                            <input type="text"/>
                        </div>
                        <div className="photo">
                            <label for="img">Doctor Photo</label>
                            <input type="file" id="img" name="img" accept="image/*"/>
                            {/* <h1>Doctor Photo</h1>
                            <canvas id= "canv1" ></canvas>

                            <p>
                            Filename:
                            <input type="file" multiple="false" accept="image/*" id="finput" onchange="upload()"/>
                            </p> */}
                        </div>
                        </div>
                        </form>
            {/* </div> */}
                        <div className="container">
                        <div className="visits" id = "Visits">
                            <div className="visit-grid">
                                <div className="sunday-visit activeDay">
                                    <DaysVisit day = "SUN"/>
                                </div>
                                <div className="Monday-visit">
                                    <DaysVisit day = "MON"/>
                                </div>
                                <div className="Tuesday-visit activeDay">
                                    <DaysVisit day = "TUE"/>
                                </div>
                                <div className="Wednesday-visit activeDay">
                                    <DaysVisit day = "WED"/>
                                </div>
                                <div className="Thursday-visit">
                                    <DaysVisit day = "THU"/>
                                </div>
                                <div className="Friday-visit activeDay">
                                    <DaysVisit day = "FRI"/>
                                </div>
                                <div className="Saturday-visit">
                                    <DaysVisit day = "SAT"/>
                                </div>

                            </div>
                        </div>
                        </div>
                        </div>
                    
                    
                
        </div>
    )
}

export default DoctorsInput

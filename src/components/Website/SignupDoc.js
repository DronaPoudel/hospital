import React from 'react'
import './componentstyles.css'
import DocSignupImg from './assets/DocSignupImg.png'
function Signup() {
    return (
        <div className = "Signup-Page">
            <div className="box">
                <h2>Doctors Signup</h2>
                <br/> <br/>
                <form>
                    <label for="cars">Account Type:</label>
                        <select id="cars" name="cars">
                            <option value="volvo">Clinic</option>
                            <option value="saab">Hospital</option>
                        </select>
                    <br/> <br/> <br/>
                    <label for="cars">Doctor Name:</label>
                    <input type="text"/>
                    <br/> <br/>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Female</label>
                    <br/> <br/>
                    <label for="Clinic Name">Clinic Name:</label>
                    <input type="text"/>
                    <br/> <br/>
                    <label for="Clinic Location">Clinic Location:</label>
                    <input type="text"/>
                    <br/> <br/>
                    <label for="Speciality">Speciality</label>
                    <input type="text"/>
                    <br/> <br/>
                    <label for="Phone Number">Phone Number:</label>
                    <input type="text"/>
                    <br/> <br/>
                    <label for="Email">Email:</label>
                    <input type="email"/>
                    <br/> <br/>
                    <label for="Password">Password</label>
                    <input type="password"/>
                    <br/> <br/>
                    <label for="re-Password">Confirm Password</label>
                    <input type="password"/>
                    <br/> <br/> <br/>
                    <input type="submit"/>
                </form>
            </div>
            <div className="img-box">
                <img src={DocSignupImg} alt="Doctor stethescope Hospital management System"/>
            </div>
        </div>
    )
}

export default Signup

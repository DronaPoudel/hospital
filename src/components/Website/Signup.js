import React from 'react'
import './componentstyles.css'
function Signup() {
    return (
        <div className = "Signin-Page">
            <div className="box">
                <h2>Register as Patient</h2>
                    <form>
                        <label >Your Name</label>
                        <input type="text"/>
                        <br/> <br/>
                        <label >Password</label>
                        <input type="password"/>
                        <br/><br/>
                        <label >Re-password</label>
                        <input type="password"/>
                        <br/><br/>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="male">Female</label>
                        <br/> <br/>
                        <input type="submit" name="" id="" value="Sign up"/>
                    </form>
            </div>
        </div>
    )
}

export default Signup

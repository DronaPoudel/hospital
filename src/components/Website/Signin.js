import React from 'react'
import './componentstyles.css'
function Signin() {
    return (
        <div className = "Signin-Page">
            <div className="box">
                <h2>Sign in to continue</h2>
                    <form>
                        <label >Your Name</label>
                        <input type="text"/>
                        <br/> <br/>
                        <label >Password</label>
                        <input type="password"/>
                        <br/><br/>
                        <input type="submit" name="" id="" value="Sign in"/>
                    </form>
            </div>
        </div>
    )
}

export default Signin

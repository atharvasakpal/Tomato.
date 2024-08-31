import React, { useState } from "react";
import { assets } from "../../frontend_assets/assets";
import "./loginpopup.css"

const LoginPopup = ({setShowLogin})=>{
    const [currState, setCurrState] = useState("Sign Up");
    return(
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={()=>setShowLogin(false)}/>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder="Enter Your Name"  required/>}
                    <input type="email" placeholder="Enter Your Email"  required/>
                    <input type="password" placeholder="Enter Your Password"  required/>
                </div>
                <button>{currState==="Sign Up"?"Create Account":"Log In"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required/>
                    <p>By continuing, I agree to the terms of use & privacy policy. </p>
                    
                </div>
                {currState==="Login"?<p>Create a new account? <span onClick={()=>{setCurrState("Sign Up")}}>Click here!</span></p> :
                     <p>Already have an account? <span onClick={()=>{setCurrState("Login")}}>Login here!</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup;
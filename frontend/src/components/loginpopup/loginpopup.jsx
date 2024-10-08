import React, { useContext, useState } from "react";
import { assets } from "../../frontend_assets/assets";
import "./loginpopup.css"
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';

const LoginPopup = ({setShowLogin})=>{
    const [currState, setCurrState] = useState("Sign Up");

    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event)=>{
        const name  = event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const {url,setToken} = useContext(StoreContext);

    const onLogin = async(event)=>{
        event.preventDefault();
        let newUrl = url;
        if(currState==='Login')
        {
            newUrl += '/user/login'; 
        }
        else{
            newUrl+= '/user/register';
        }

        const response = await axios.post(newUrl,data)
        if(response.data.success)
        {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }


    return(
        <div className="login-popup">
            <form  className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={()=>setShowLogin(false)}/>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text"  name='name' onChange={onChangeHandler} value={data.name} placeholder="Enter Your Name"  required/>}
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={onChangeHandler} value={data.email} required/>
                    <input type="password" placeholder="Enter Your Password"  name='password' onChange={onChangeHandler} value={data.password} required/>
                </div>
                <button type="submit">{currState==="Sign Up"?"Create Account":"Log In"}</button>
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
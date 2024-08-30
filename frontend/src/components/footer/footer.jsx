import React from "react";
import './footer.css';
import { assets } from "../../frontend_assets/assets";

const Footer = ()=>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id quis tempora ratione doloribus veniam perferendis excepturi, officia omnis maxime nobis deserunt saepe assumenda reiciendis doloremque. Ut sapiente alias perspiciatis.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                     <h2>Get in touch</h2>
                     <ul>
                        <li>+1 1234567890</li>
                        <li>contact@tomato.com</li>
                     </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All rights reserved</p>
        </div>
    )
}

export default Footer;
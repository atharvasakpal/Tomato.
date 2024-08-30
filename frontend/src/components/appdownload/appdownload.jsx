import React from "react";
import { assets } from "../../frontend_assets/assets";
import './appdownload.css'
const Appdownload = ()=>{
    return(
        <div className="app-download" id="app-download">
            <p>For better experience, Download<br/>Tomato app</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default Appdownload;
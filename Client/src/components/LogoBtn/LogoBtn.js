import React from 'react';
import { Link } from "react-router-dom";
import logo from "./youtube.png";


function LogoBtn() {
    return (
        <div>
            <Link to={"/"}>                
                <img className="youtubeLogo" src={logo} alt="logo" />
            </Link>
        </div>
    )
}

export default LogoBtn

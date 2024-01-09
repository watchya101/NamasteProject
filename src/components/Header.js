
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

 

 const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
    <div className="header">
            <div className="logoContainer">
                    <img 
                    className="logo 
                    "src = {LOGO_URL}
                    alt="Healthy Food Logo Png @clipartmax.com"
                    />
            </div>
            <div className="nav-items">
                    <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li>Cart</li>
                            <button className="login" 
                            onClick={()=>{
                               btnNameReact === "Login"
                               ?(setBtnNameReact("Logout"))
                               :(setBtnNameReact("Login"));

                        }}
                            >
                                {btnNameReact}
                                </button>
                    </ul>
            </div>
    </div>
    );
};

export default Header;
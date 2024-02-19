
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

 

 const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
    <div className="flex justify-between shadow-lg mb-2 px-1 bg-blue-100 sm:bg-yellow-50" >
            <div className="logoContainer">
                    <img 
                    className="w-20 px-1 py-2"
                    src = {LOGO_URL}
                    alt="Healthy Food Logo Png @clipartmax.com"
                    />
            </div>
            <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li>Online Status: {useOnlineStatus ? "✔️": "✖️"}</li>
                            <li className="px-4"><Link to="/">Home</Link></li>
                            <li className="px-4"><Link to="/about">About Us</Link></li>
                            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
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
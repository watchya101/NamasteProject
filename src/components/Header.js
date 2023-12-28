
import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Cart</li>
                    </ul>
            </div>
    </div>
    );
};

export default Header;
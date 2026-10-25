import "./Logo.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/" className="logo">
            <span className="logo-square"></span>
            The Art of Finance
        </NavLink>
    );
};

export default Logo;
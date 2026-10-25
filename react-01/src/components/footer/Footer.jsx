import "./Footer.css";
import Logo from "../logo/Logo";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Logo />
                        <p>A first-principles approach to understanding finance, built layer by layer.</p>
                    </div>
                    <div className="footer-links">
                        <NavLink to="/overview">Finance Overview</NavLink>
                        <NavLink to="/tvm">Time Value of Money</NavLink>
                        <NavLink to="/debt">Debt</NavLink>
                        <NavLink to="/equity">Equity</NavLink>
                        <NavLink to="/alternatives">Alternatives</NavLink>
                        <NavLink to="/applications">Applications</NavLink>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>Site Administrator: Nicolas Gauvin</span>
                    <span>&copy; 2026 The Art of Finance</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
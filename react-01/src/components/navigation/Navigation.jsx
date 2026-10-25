import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <button aria-label="Toggle Navigation">&#9776;</button>
            <ul>
                <li><NavLink to="/overview">Finance Overview</NavLink></li>
                <li><NavLink to="/tvm">Time Value of Money</NavLink></li>
                <li><NavLink to="/debt">Debt</NavLink></li>
                <li><NavLink to="/equity">Equity</NavLink></li>
                <li><NavLink to="/alternatives">Alternatives</NavLink></li>
                <li><NavLink to="/applications">Applications</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
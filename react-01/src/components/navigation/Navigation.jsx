import "./Navigation.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const closeNav = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="main-nav">
            <button aria-label="Toggle Navigation" onClick={toggleNav}>
                {menuOpen?(<span>&#10005;</span>):(<span>&#9776;</span>)}
            </button>
            <ul className={menuOpen?"":"hide-small"}>
                <li><NavLink to="/overview" onClick={closeNav}>Finance Overview</NavLink></li>
                <li><NavLink to="/tvm" onClick={closeNav}>Time Value of Money</NavLink></li>
                <li><NavLink to="/debt" onClick={closeNav}>Debt</NavLink></li>
                <li><NavLink to="/equity" onClick={closeNav}>Equity</NavLink></li>
                <li><NavLink to="/alternatives" onClick={closeNav}>Alternatives</NavLink></li>
                <li><NavLink to="/applications" onClick={closeNav}>Applications</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
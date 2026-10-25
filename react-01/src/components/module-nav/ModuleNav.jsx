import "./ModuleNav.css";
import {NavLink} from "react-router-dom";

const ModuleNav = (props) => {
    return (
        <section className="module-nav">
            <div className="container">
                <NavLink to={props.prevLink} className="prev-link">&larr; {props.prevText}</NavLink>
                <NavLink to={props.nextLink} className="btn btn-gold">{props.nextText} &rarr;</NavLink>
            </div>
        </section>
    );
};

export default ModuleNav;
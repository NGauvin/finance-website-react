import "./ModuleCard.css";
import {NavLink} from "react-router-dom";

const ModuleCard = (props) => {
    return (
        <div className="module-card">
            <div className="module-number">{props.number}</div>
            <NavLink to={props.link} className="module-link">
                <span className="module-tag">{props.tag}</span>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <span className="module-arrow">&rarr;</span>
            </NavLink>
        </div>
    );
};

export default ModuleCard;

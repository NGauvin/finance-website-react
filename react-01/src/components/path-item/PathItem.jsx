import "./PathItem.css";

const PathItem = (props) => {
    return (
        <li className="path-item">
            <span className="path-number">{props.number}</span>
            {props.title}
        </li>
    );
};

export default PathItem;

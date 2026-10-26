import "./FormulaCard.css";

const FormulaCard = (props) => {
    return (
        <div className="formula-card">
            <span className="formula-badge">{props.badge}</span>
            <div className="formula-box">{props.formula}</div>
            <p>{props.text}</p>
            <ul>
                <li>{props.legend1}</li>
                <li>{props.legend2}</li>
                <li>{props.legend3}</li>
            </ul>
        </div>
    );
};

export default FormulaCard;

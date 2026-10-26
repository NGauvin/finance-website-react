import "./ModuleSummary.css";

const ModuleSummary = (props) => {
    return (
        <div className="module-summary">
            <span className="summary-number">{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default ModuleSummary;

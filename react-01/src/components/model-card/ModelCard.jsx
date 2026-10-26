import "./ModelCard.css";

const ModelCard = (props) => {
    return (
        <div className="model-card">
            <span className="model-badge">{props.badge}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="formula-box">{props.formula}</div>
            <div className="model-legend">
                <div>
                    <strong>{props.symbol1}</strong>
                    <span>{props.meaning1}</span>
                </div>
                <div>
                    <strong>{props.symbol2}</strong>
                    <span>{props.meaning2}</span>
                </div>
                <div>
                    <strong>{props.symbol3}</strong>
                    <span>{props.meaning3}</span>
                </div>
            </div>
            <p className="formula-note">{props.note}</p>
        </div>
    );
};

export default ModelCard;

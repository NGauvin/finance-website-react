import "./DataPoint.css";

const DataPoint = (props) => {
    return (
        <div className="data-point">
            <span className="data-label">{props.label}</span>
            <span className="data-value">{props.value}</span>
        </div>
    );
};

export default DataPoint;

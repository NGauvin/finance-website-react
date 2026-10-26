import "./ChartBar.css";

const ChartBar = (props) => {
    return (
        <div className="chart-bar">
            <span className="bar-value">{props.value}</span>
            <div className={props.barClass}></div>
            <span className="bar-label">{props.label}</span>
        </div>
    );
};

export default ChartBar;

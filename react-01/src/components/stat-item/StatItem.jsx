import "./StatItem.css";

const StatItem = (props) => {
    return (
        <div className="stat-item">
            <span className="stat-label">{props.label}</span>
            <span className="stat-value">{props.value}</span>
        </div>
    );
};

export default StatItem;

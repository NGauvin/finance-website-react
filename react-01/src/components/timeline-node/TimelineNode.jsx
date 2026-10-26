import "./TimelineNode.css";

const TimelineNode = (props) => {
    return (
        <div className="timeline-node">
            <span className="node-dot"></span>
            <span className="node-year">{props.year}</span>
            <span className="node-value">{props.value}</span>
        </div>
    );
};

export default TimelineNode;

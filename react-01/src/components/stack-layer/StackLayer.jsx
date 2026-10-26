import "./StackLayer.css";

const StackLayer = (props) => {
    return (
        <div className={props.layerClass}>
            <span>{props.name}</span>
            <span className="layer-risk">{props.risk}</span>
        </div>
    );
};

export default StackLayer;

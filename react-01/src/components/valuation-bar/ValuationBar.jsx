import "./ValuationBar.css";

const ValuationBar = (props) => {
    return (
        <div className="valuation-bar">
            <div className="bar-header">
                <span>{props.title}</span>
                <span>{props.value}</span>
            </div>
            <span className="bar-formula">{props.formula}</span>
            <div className="bar-track">
                <div className={props.fillClass}></div>
            </div>
        </div>
    );
};

export default ValuationBar;

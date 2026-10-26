import "./CashFlowStep.css";

const CashFlowStep = (props) => {
    return (
        <div className="cash-flow-step">
            <span className={props.amountClass}>{props.amount}</span>
            <span className="cf-desc">{props.desc}</span>
            <span className="cf-pin"></span>
            <span className="cf-time">{props.time}</span>
        </div>
    );
};

export default CashFlowStep;

import "./StepTab.css";

const StepTab = (props) => {
    return (
        <button className={props.tabClass}>{props.title}</button>
    );
};

export default StepTab;

import "./InputGroup.css";

const InputGroup = (props) => {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input type="text" value={props.value} readOnly />
        </div>
    );
};

export default InputGroup;

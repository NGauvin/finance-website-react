import "./KeyTerm.css";

const KeyTerm = (props) => {
    return (
        <details className="key-term">
            <summary>{props.term}</summary>
            <p>{props.definition}</p>
        </details>
    );
};

export default KeyTerm;

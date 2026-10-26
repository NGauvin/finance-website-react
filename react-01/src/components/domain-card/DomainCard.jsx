import "./DomainCard.css";

const DomainCard = (props) => {
    return (
        <div className="domain-card">
            <div className="accent-bar"></div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
                <li>{props.item4}</li>
            </ul>
        </div>
    );
};

export default DomainCard;

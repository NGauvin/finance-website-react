import "./InfoCard.css";

const InfoCard = (props) => {
    return (
        <div className="info-card">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
};

export default InfoCard;

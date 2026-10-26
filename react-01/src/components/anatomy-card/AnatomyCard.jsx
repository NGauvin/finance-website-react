import "./AnatomyCard.css";

const AnatomyCard = (props) => {
    return (
        <div className="anatomy-card">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
};

export default AnatomyCard;

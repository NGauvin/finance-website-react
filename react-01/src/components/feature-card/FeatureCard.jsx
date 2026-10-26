import "./FeatureCard.css";

const FeatureCard = (props) => {
    return (
        <div className="feature-card">
            <div className="feature-bar"></div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default FeatureCard;

import "./SectionTitle.css";

const SectionTitle = (props) => {
    return (
        <div className="section-title">
            <span className="section-number">{props.number}</span>
            <h2>{props.title}</h2>
        </div>
    );
};

export default SectionTitle;
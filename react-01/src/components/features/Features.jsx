import "./Features.css";
import FeatureCard from "../feature-card/FeatureCard";

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <FeatureCard
                    title="First Principles"
                    text="Every concept is grounded in fundamentals, with no shortcuts and no jargon left unexplained." />
                <FeatureCard
                    title="Progressive Depth"
                    text="Each module builds on the last. You will never be asked to use a concept before it is introduced." />
                <FeatureCard
                    title="Visual Learning"
                    text="Diagrams, formulas, and worked examples make abstract ideas concrete and memorable." />
            </div>
        </section>
    );
};

export default Features;

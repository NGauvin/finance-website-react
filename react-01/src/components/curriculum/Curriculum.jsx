import "./Curriculum.css";
import ModuleCard from "../module-card/ModuleCard";

const Curriculum = () => {
    return (
        <section id="curriculum" className="curriculum">
            <div className="container">
                <div className="curriculum-header">
                    <span className="section-badge">CURRICULUM</span>
                    <h2>Your Learning Journey</h2>
                    <p>Six modules that build a complete picture of finance, each one a prerequisite for the next.</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    <ModuleCard
                        number="01"
                        link="/overview"
                        tag="Foundation"
                        title="Finance Overview"
                        text="What is finance? Understand markets, capital, and the role money plays in the economy." />
                    <ModuleCard
                        number="02"
                        link="/tvm"
                        tag="Core Concept"
                        title="Time Value of Money"
                        text="A dollar today is worth more than a dollar tomorrow. Learn present value, future value, and discounting." />
                    <ModuleCard
                        number="03"
                        link="/debt"
                        tag="Instruments"
                        title="Debt"
                        text="Explore loans, bonds, and fixed-income instruments. Learn how to price debt using discounted cash flows." />
                    <ModuleCard
                        number="04"
                        link="/equity"
                        tag="Instruments"
                        title="Equity"
                        text="Understand stocks, dividends, and ownership claims. Learn DCF valuation and relative pricing models." />
                    <ModuleCard
                        number="05"
                        link="/alternatives"
                        tag="Advanced"
                        title="Alternatives"
                        text="Real assets, commodities, and alternative strategies. Portfolio theory and the risk/return tradeoff." />
                    <ModuleCard
                        number="06"
                        link="/applications"
                        tag="Capstone"
                        title="Applications"
                        text="Put it all together. Evaluate real investments using the frameworks you have built from first principles." />
                </div>
            </div>
        </section>
    );
};

export default Curriculum;

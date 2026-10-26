import "./CallToAction.css";
import {NavLink} from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="call-to-action">
            <div className="container">
                <h2>Ready to begin?</h2>
                <p>No prior experience required. Start with an overview of what finance is and why it matters.</p>
                <NavLink to="/overview" className="btn btn-dark-green">Begin: Finance Overview &rarr;</NavLink>
            </div>
        </section>
    );
};

export default CallToAction;

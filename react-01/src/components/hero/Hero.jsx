import "./Hero.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import PathItem from "../path-item/PathItem";

const Hero = () => {
    return (
        <section className="home-hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Master Finance<br /><span className="highlight-text">from First<br />Principles</span></h1>
                    <p>A progressive curriculum that takes you from zero financial knowledge to confident investment analysis, built concept by concept, layer by layer.</p>
                    <div className="hero-buttons">
                        <NavLink to="/overview" className="btn btn-gold">Start Learning</NavLink>
                        <HashLink to="/#curriculum" className="btn btn-gold">View Curriculum</HashLink>
                    </div>
                </div>

                <div className="path-card">
                    <h3>LEARNING PATH</h3>
                    <ul>
                        <PathItem number="01" title="Finance Overview" />
                        <PathItem number="02" title="Time Value of Money" />
                        <PathItem number="03" title="Debt" />
                        <PathItem number="04" title="Equity" />
                        <PathItem number="05" title="Alternatives" />
                        <PathItem number="06" title="Applications" />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;

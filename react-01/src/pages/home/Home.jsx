import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import Curriculum from "../../components/curriculum/Curriculum";
import CallToAction from "../../components/call-to-action/CallToAction";

const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Features />
            <Curriculum />
            <CallToAction />
        </div>
    )
};

export default Home;

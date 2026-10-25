import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Applications = () => {
    return (
        <div id="applications" className="page">
            <PageHero
                module="Module 06"
                tag="Capstone"
                title="Applications"
                highlight="in Practice"
                text="Everything you have learned now comes together. Here we apply first-principles thinking to evaluate a real investment from scratch, the way a professional analyst would." />

            <ModuleNav
                prevText="Alternatives"
                prevLink="/alternatives"
                nextText="Home"
                nextLink="/" />
        </div>
    )
};

export default Applications;
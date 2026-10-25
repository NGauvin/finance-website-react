import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Overview = () => {
    return (
        <div id="overview" className="page">
            <PageHero
                module="Module 01"
                tag="Foundation"
                title="Finance"
                highlight="Overview"
                text="Before diving into formulas and instruments, we must understand what finance is, why it exists, and the role it plays in the economy." />

            <ModuleNav
                prevText="Home"
                prevLink="/"
                nextText="Next: Time Value of Money"
                nextLink="/tvm" />
        </div>
    )
};

export default Overview;
import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Alternatives = () => {
    return (
        <div id="alternatives" className="page">
            <PageHero
                module="Module 05"
                tag="Advanced"
                title="Alternative"
                highlight="Investments"
                text="Beyond stocks and bonds lies a rich set of asset classes, like real estate, commodities, and private equity. Explore their role in a diversified portfolio." />

            <ModuleNav
                prevText="Equity"
                prevLink="/equity"
                nextText="Next: Applications"
                nextLink="/applications" />
        </div>
    )
};

export default Alternatives;
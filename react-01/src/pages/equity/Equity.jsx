import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Equity = () => {
    return (
        <div id="equity" className="page">
            <PageHero
                module="Module 04"
                tag="Core Concept"
                title="Equity &"
                highlight="Stock Valuation"
                text="Equity represents ownership. Learn what stocks are, what drives their value, and how analysts price them using fundamental valuation models." />

            <ModuleNav
                prevText="Debt"
                prevLink="/debt"
                nextText="Next: Alternatives"
                nextLink="/alternatives" />
        </div>
    )
};

export default Equity;
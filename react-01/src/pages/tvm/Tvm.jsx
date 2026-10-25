import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Tvm = () => {
    return (
        <div id="tvm" className="page">
            <PageHero
                module="Module 02"
                tag="Core Concept"
                title="Time Value"
                highlight="of Money"
                text="The single most important concept in all of finance: a dollar received today is worth more than a dollar received in the future." />

            <ModuleNav
                prevText="Finance Overview"
                prevLink="/overview"
                nextText="Next: Debt"
                nextLink="/debt" />
        </div>
    )
};

export default Tvm;
import PageHero from "../../components/page-hero/PageHero";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Debt = () => {
    return (
        <div id="debt" className="page">
            <PageHero
                module="Module 03"
                tag="Core Concept"
                title="Debt: Loans"
                highlight="& Bonds"
                text="Debt is a promise to repay. Learn how loans work, how bonds are structured, and how to price fixed-income instruments using present value." />

            <ModuleNav
                prevText="Time Value of Money"
                prevLink="/tvm"
                nextText="Next: Equity"
                nextLink="/equity" />
        </div>
    )
};

export default Debt;
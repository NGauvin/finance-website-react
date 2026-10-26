import "./Overview.css";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import InfoCard from "../../components/info-card/InfoCard";
import FlowStep from "../../components/flow-step/FlowStep";
import DomainCard from "../../components/domain-card/DomainCard";
import KeyTerm from "../../components/key-term/KeyTerm";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="What is Finance?" />
                    <p>At its core, <strong>finance is the science of managing money across time.</strong> It covers the decisions individuals, businesses, and governments make about acquiring and deploying capital to reach their goals.</p>
                    <p>Finance asks three fundamental questions:</p>

                    <div className="card-stack">
                        <InfoCard
                            title="Where does money come from?"
                            text="How capital is raised, through debt, equity, or retained earnings." />
                        <InfoCard
                            title="Where does money go?"
                            text="How capital is deployed, meaning which projects, assets, or investments receive funding." />
                        <InfoCard
                            title="How is value created?"
                            text="Whether the returns generated justify the risks and costs of the capital deployed." />
                    </div>

                    <div className="flow-chart">
                        <span className="flow-title">THE FLOW OF CAPITAL</span>
                        <div className="flow-steps">
                            <FlowStep text="Savers & Investors" />
                            <span className="flow-arrow">&rarr;</span>
                            <FlowStep text="Financial Markets" />
                            <span className="flow-arrow">&rarr;</span>
                            <FlowStep text="Businesses & Govs" />
                            <span className="flow-arrow">&rarr;</span>
                            <FlowStep text="Returns & Growth" />
                        </div>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="Three Domains of Finance" />

                    <div className="domain-grid">
                        <DomainCard
                            title="Personal Finance"
                            text="Managing individual income, savings, investment, and debt; the decisions you make every day."
                            item1="Budgeting"
                            item2="Retirement savings"
                            item3="Mortgages"
                            item4="Tax planning" />
                        <DomainCard
                            title="Corporate Finance"
                            text="How companies raise capital, allocate resources, and maximize shareholder value."
                            item1="Capital structure"
                            item2="Mergers & acquisitions"
                            item3="Dividend policy"
                            item4="Valuation" />
                        <DomainCard
                            title="Capital Markets"
                            text="The markets where buyers and sellers trade financial instruments like stocks and bonds."
                            item1="Stock markets"
                            item2="Bond markets"
                            item3="Derivatives"
                            item4="IPOs" />
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Key Terms" />
                    <p>These six terms will appear throughout every module. Click each one to see its definition.</p>

                    <div className="term-list">
                        <KeyTerm
                            term="Capital"
                            definition="Financial resources or assets used to fund operations, make investments, or generate future income." />
                        <KeyTerm
                            term="Risk"
                            definition="The uncertainty around an investment's expected returns, or the chance of losing capital." />
                        <KeyTerm
                            term="Return"
                            definition="The financial gain or loss made on an investment over a specific time period." />
                        <KeyTerm
                            term="Liquidity"
                            definition="How easily and quickly an asset can be turned into cash without affecting its market price." />
                        <KeyTerm
                            term="Valuation"
                            definition="The process of figuring out what an asset or company is worth today." />
                        <KeyTerm
                            term="Yield"
                            definition="The earnings an investment produces over a period of time, shown as a percentage." />
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Home"
                prevLink="/"
                nextText="Next: Time Value of Money"
                nextLink="/tvm" />
        </div>
    )
};

export default Overview;

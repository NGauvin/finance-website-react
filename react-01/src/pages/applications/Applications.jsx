import "./Applications.css";
import {NavLink} from "react-router-dom";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import ModuleSummary from "../../components/module-summary/ModuleSummary";
import StepTab from "../../components/step-tab/StepTab";
import DataPoint from "../../components/data-point/DataPoint";
import ValuationBar from "../../components/valuation-bar/ValuationBar";
import StatItem from "../../components/stat-item/StatItem";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="What You Have Built" />

                    <div className="summary-grid">
                        <ModuleSummary number="01" title="Finance Overview" text="Markets, capital flows, the role of finance" />
                        <ModuleSummary number="02" title="Time Value of Money" text="PV, FV, discounting, NPV" />
                        <ModuleSummary number="03" title="Debt" text="Bonds, yield, fixed-income pricing" />
                        <ModuleSummary number="04" title="Equity" text="Stocks, DDM, DCF, P/E valuation" />
                        <ModuleSummary number="05" title="Alternatives" text="Diversification, correlation, asset classes" />
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="A 5-Step Investment Framework" />
                    <p>Professional investors follow a structured process. Each step builds on the one before it.</p>

                    <div className="framework">
                        <div className="framework-tabs">
                            <StepTab title="1. Understand the Business" tabClass="step-tab active" />
                            <StepTab title="2. Assess the Competitive Position" tabClass="step-tab" />
                            <StepTab title="3. Analyze the Financials" tabClass="step-tab" />
                            <StepTab title="4. Value the Investment" tabClass="step-tab" />
                            <StepTab title="5. Make a Decision" tabClass="step-tab" />
                        </div>

                        <div className="card framework-content">
                            <h3>1. Understand the Business</h3>
                            <ol>
                                <li>What does the company do, and what product or service does it sell?</li>
                                <li>Who are its customers, and how big is the market?</li>
                                <li>What are the key drivers of revenue and cost?</li>
                            </ol>
                            <div className="key-tools">
                                <span>Key Tools:</span>
                                <p>Annual reports, 10-K filings, industry research</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Worked Example: StableCo Inc." />
                    <p>A made-up, mature consumer staples company with steady cash flows and a 20-year history of paying dividends.</p>

                    <div className="card">
                        <span className="box-title">COMPANY DATA</span>
                        <div className="data-grid">
                            <DataPoint label="Annual Dividend D₁" value="$3.20" />
                            <DataPoint label="Dividend Growth Rate" value="5% / yr" />
                            <DataPoint label="Required Return" value="10%" />
                            <DataPoint label="Current P/E" value="18×" />
                            <DataPoint label="EPS (ttm)" value="$6.40" />
                            <DataPoint label="Net Debt / EBITDA" value="1.8×" />
                        </div>

                        <div className="bar-list">
                            <ValuationBar
                                title="DDM Valuation"
                                value="$64.00"
                                formula="P = $3.20 / (0.10 − 0.05)"
                                fillClass="bar-fill fill-56" />
                            <ValuationBar
                                title="P/E Valuation"
                                value="$115.20"
                                formula="P/E 18× × $6.40"
                                fillClass="bar-fill fill-100" />
                        </div>

                        <div className="summary-card">
                            <span className="box-title">VALUATION SUMMARY</span>
                            <div className="summary-stats">
                                <StatItem label="Average Intrinsic Value" value="$89.60" />
                                <StatItem label="Current Market Price" value="$110.00" />
                                <StatItem label="Margin of Safety" value="-22.8%" />
                            </div>
                            <p>At $110.00, StableCo appears to be trading above our estimated intrinsic value. There is no margin of safety at this price, so a buyer is either paying extra for quality or the assumptions need another look.</p>
                        </div>
                    </div>
                </section>

                <section className="journey-complete">
                    <div className="star">&#9733;</div>
                    <h2>Journey Complete</h2>
                    <p>You have gone from first principles, like what money is and why time affects its value, all the way to evaluating a real investment like a professional analyst. Finance is a craft, and you now have the foundation to keep building.</p>
                    <div className="journey-buttons">
                        <NavLink to="/" className="btn btn-dark-green">Back to Home</NavLink>
                        <NavLink to="/overview" className="btn btn-outline">Review from Start</NavLink>
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Alternatives"
                prevLink="/alternatives"
                nextText="Home"
                nextLink="/" />
        </div>
    )
};

export default Applications;

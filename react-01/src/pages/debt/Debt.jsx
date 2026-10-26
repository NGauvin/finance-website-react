import "./Debt.css";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import AnatomyCard from "../../components/anatomy-card/AnatomyCard";
import CashFlowStep from "../../components/cash-flow-step/CashFlowStep";
import BondRow from "../../components/bond-row/BondRow";
import InputGroup from "../../components/input-group/InputGroup";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="What is Debt?" />
                    <p>When a person, company, or government needs money, one option is to <strong>borrow it</strong>. In exchange for cash today, they promise to repay the principal, usually with interest over time. This contract is called a <strong>debt instrument</strong>.</p>
                    <p>Debt is the lender's asset and the borrower's liability. The lender earns a return (interest), and the borrower gets capital to use. Both sides benefit as long as the interest rate is priced correctly for the risk.</p>

                    <div className="anatomy-box">
                        <span className="box-title">ANATOMY OF A LOAN</span>
                        <div className="anatomy-grid">
                            <AnatomyCard title="Principal" text="The original amount borrowed" />
                            <AnatomyCard title="Interest Rate" text="The cost of borrowing per period" />
                            <AnatomyCard title="Term" text="The length of the loan" />
                            <AnatomyCard title="Amortization" text="The schedule for paying back principal" />
                        </div>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="Understanding Bonds" />
                    <p>A <strong>bond</strong> is a debt instrument that can be traded. The issuer borrows from investors by selling bonds, and investors receive regular <strong>coupon payments</strong> (interest) plus the <strong>face value</strong> (principal) at maturity.</p>

                    <div className="card">
                        <span className="cash-flow-title">Cash Flow for a 3-year, 5% coupon, $1,000 Bond</span>
                        <div className="cash-flow-diagram">
                            <CashFlowStep amount="-$960" amountClass="cf-amount negative" desc="price paid" time="Today" />
                            <CashFlowStep amount="+$50" amountClass="cf-amount" desc="coupon" time="Year 1" />
                            <CashFlowStep amount="+$50" amountClass="cf-amount" desc="coupon" time="Year 2" />
                            <CashFlowStep amount="+$1,050" amountClass="cf-amount" desc="coupon + principal" time="Year 3" />
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Issuer</th>
                                    <th>Risk</th>
                                    <th>Yield</th>
                                </tr>
                            </thead>
                            <tbody>
                                <BondRow
                                    type="Government Bond"
                                    issuer="National government"
                                    risk="Very Low"
                                    riskClass="risk-badge very-low"
                                    typicalYield="3-5%" />
                                <BondRow
                                    type="Municipal Bond"
                                    issuer="State or local government"
                                    risk="Low"
                                    riskClass="risk-badge low"
                                    typicalYield="3-4%" />
                                <BondRow
                                    type="Corporate Bond"
                                    issuer="Solid, stable companies"
                                    risk="Moderate"
                                    riskClass="risk-badge moderate"
                                    typicalYield="4-6%" />
                                <BondRow
                                    type="High-Yield Bond"
                                    issuer="Riskier companies"
                                    risk="High"
                                    riskClass="risk-badge high"
                                    typicalYield="7-10%+" />
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Bond Pricing Formula" />
                    <p>A bond's price is simply the <strong>present value of all its future cash flows</strong>, meaning the coupon payments plus the face value, discounted at the market yield (YTM).</p>

                    <div className="card">
                        <div className="formula-box">
                            P = &Sigma; [ C / (1 + y)<sup>t</sup> ] + F / (1 + y)<sup>n</sup>
                        </div>
                        <p className="formula-note">Where C = coupon payment, y = yield to maturity (YTM), F = face value, n = years to maturity</p>
                    </div>

                    <div className="callout">
                        <h4>The Price-Yield Relationship</h4>
                        <p>When market interest rates rise, existing bond prices fall, and when rates fall, prices rise. This inverse relationship is one of the most important ideas in fixed income.</p>
                    </div>

                    <div className="card">
                        <span className="calc-title">BOND PRICING CALCULATOR</span>
                        <div className="calc-inputs">
                            <InputGroup label="Face Value ($)" value="1000" />
                            <InputGroup label="Coupon Rate (%)" value="5" />
                            <InputGroup label="YTM (%)" value="6.5" />
                            <InputGroup label="Years to Maturity" value="3" />
                        </div>

                        <div className="result-card bond-results">
                            <div>
                                <span className="result-label">Bond Price</span>
                                <div className="result-value">$960.28</div>
                            </div>
                            <div>
                                <span className="result-label">Annual Coupon</span>
                                <div className="result-small">$50.00</div>
                            </div>
                            <div>
                                <span className="result-label">Status</span>
                                <div className="result-small">Trading at a Discount</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Time Value of Money"
                prevLink="/tvm"
                nextText="Next: Equity"
                nextLink="/equity" />
        </div>
    )
};

export default Debt;

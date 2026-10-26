import "./Equity.css";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import ComparisonRow from "../../components/comparison-row/ComparisonRow";
import StackLayer from "../../components/stack-layer/StackLayer";
import ModelCard from "../../components/model-card/ModelCard";
import InputGroup from "../../components/input-group/InputGroup";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="What is Equity?" />
                    <p>A share of <strong>equity</strong> (or stock) is a partial ownership claim on a company's assets and future earnings. Shareholders benefit when the company grows, but in a liquidation they are paid last, after debt holders.</p>
                    <p>Unlike debt, equity has no fixed repayment schedule. The return depends entirely on how the company performs.</p>

                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Characteristic</th>
                                    <th>Debt</th>
                                    <th>Equity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ComparisonRow label="Claim" debt="Fixed (interest + principal)" equity="Residual (profits and assets)" />
                                <ComparisonRow label="Priority" debt="Senior, paid first" equity="Junior, paid last" />
                                <ComparisonRow label="Maturity" debt="Fixed term" equity="Perpetual" />
                                <ComparisonRow label="Governance" debt="Limited (covenants)" equity="Voting rights (board, etc.)" />
                                <ComparisonRow label="Primary Risk" debt="Default" equity="Loss of principal" />
                                <ComparisonRow label="Return Driver" debt="Interest rate" equity="Business growth + dividends" />
                            </tbody>
                        </table>
                    </div>

                    <div className="stack-box">
                        <span className="box-title">CAPITAL STRUCTURE STACK</span>
                        <div className="stack">
                            <StackLayer name="Senior Secured Debt" risk="Lowest Risk / First Paid" layerClass="stack-layer layer-1" />
                            <StackLayer name="Senior Unsecured Debt" risk="Moderate Risk" layerClass="stack-layer layer-2" />
                            <StackLayer name="Subordinated Debt" risk="Higher Risk" layerClass="stack-layer layer-3" />
                            <StackLayer name="Preferred Stock" risk="Hybrid of Debt & Equity" layerClass="stack-layer layer-4" />
                            <StackLayer name="Common Equity" risk="Highest Risk / Highest Return Potential" layerClass="stack-layer layer-5" />
                        </div>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="Valuation Models" />
                    <p>The core idea of equity valuation is the same as bond pricing: a stock is worth the <strong>present value of all the future cash flows</strong> it will produce for its owners.</p>

                    <ModelCard
                        badge="DDM"
                        title="Dividend Discount Model"
                        text="Values a stock as the present value of all future dividends, assuming they grow at a constant rate g."
                        formula="P = D₁ / (r − g)"
                        symbol1="D₁"
                        meaning1="Next year's dividend"
                        symbol2="r"
                        meaning2="Required rate of return"
                        symbol3="g"
                        meaning3="Constant dividend growth rate"
                        note="Only works when the required return (r) is greater than the growth rate (g)." />
                    <ModelCard
                        badge="DCF"
                        title="Discounted Cash Flow"
                        text="Values a company by discounting its projected free cash flows, plus a terminal value, back to today."
                        formula="P = Σ [ FCFₜ / (1 + WACC)ᵗ ] + TV"
                        symbol1="FCFₜ"
                        meaning1="Free cash flow in year t"
                        symbol2="WACC"
                        meaning2="Discount rate"
                        symbol3="TV"
                        meaning3="Terminal value at the end of the forecast"
                        note="Used for companies that don't pay dividends, or when building detailed forecasts." />
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Valuation Calculator" />
                    <p>Estimate a stock's value using two common methods.</p>

                    <div className="calc-grid">
                        <div className="card">
                            <span className="calc-title">DIVIDEND DISCOUNT MODEL</span>
                            <div className="calc-inputs">
                                <InputGroup label="Annual Dividend D₁ ($)" value="2.50" />
                                <InputGroup label="Required Return r (%)" value="10" />
                                <InputGroup label="Growth Rate g (%)" value="4" />
                            </div>
                            <div className="result-card">
                                <span className="result-label">Intrinsic Value (DDM)</span>
                                <div className="result-value">$41.67</div>
                            </div>
                        </div>

                        <div className="card">
                            <span className="calc-title">P/E RELATIVE VALUATION</span>
                            <p className="calc-desc">Applies a market multiple to earnings per share. Simple and widely used.</p>
                            <div className="calc-inputs">
                                <InputGroup label="Earnings Per Share ($)" value="4.00" />
                                <InputGroup label="Target P/E Ratio (x)" value="20" />
                            </div>
                            <div className="result-card">
                                <span className="result-label">Implied Price (P/E)</span>
                                <div className="result-value">$80.00</div>
                                <span className="result-label">P/E × EPS</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Debt"
                prevLink="/debt"
                nextText="Next: Alternatives"
                nextLink="/alternatives" />
        </div>
    )
};

export default Equity;

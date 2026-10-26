import "./Tvm.css";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import InfoCard from "../../components/info-card/InfoCard";
import ChartBar from "../../components/chart-bar/ChartBar";
import FormulaCard from "../../components/formula-card/FormulaCard";
import InputGroup from "../../components/input-group/InputGroup";
import TimelineNode from "../../components/timeline-node/TimelineNode";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="Why Does Time Affect Value?" />
                    <p>Money has time value for three reasons:</p>

                    <div className="card-stack">
                        <InfoCard
                            title="Opportunity Cost"
                            text="Money available today can be invested to earn a return. Waiting means giving up that return." />
                        <InfoCard
                            title="Inflation"
                            text="Prices generally rise over time, which eats away at the purchasing power of future money." />
                        <InfoCard
                            title="Uncertainty"
                            text="A payment promised in the future carries risk because it might never arrive. Certain cash now is worth more than uncertain cash later." />
                    </div>

                    <div className="chart-box">
                        <span className="box-title">VALUE OF $1,000 OVER TIME AT 8% ANNUAL RETURN</span>
                        <div className="chart-bars">
                            <ChartBar value="$1000" label="Yr 0" barClass="bar bar-1" />
                            <ChartBar value="$1080" label="Yr 1" barClass="bar bar-2" />
                            <ChartBar value="$1166" label="Yr 2" barClass="bar bar-3" />
                            <ChartBar value="$1260" label="Yr 3" barClass="bar bar-4" />
                            <ChartBar value="$1360" label="Yr 4" barClass="bar bar-5" />
                            <ChartBar value="$1469" label="Yr 5" barClass="bar bar-6" />
                        </div>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="The Core Formulas" />

                    <div className="formula-grid">
                        <FormulaCard
                            badge="Future Value"
                            formula="FV = PV × (1 + r)ⁿ"
                            text="Given a present sum PV, grown at rate r for n periods, how much will it be worth in the future?"
                            legend1="PV = Present Value (starting amount)"
                            legend2="r = Interest rate per period"
                            legend3="n = Number of periods" />
                        <FormulaCard
                            badge="Present Value"
                            formula="PV = FV / (1 + r)ⁿ"
                            text="Given a future sum FV, what is it worth today at rate r? This is called discounting."
                            legend1="FV = Future Value (future amount)"
                            legend2="r = Discount rate"
                            legend3="n = Number of periods" />
                    </div>

                    <div className="card">
                        <h3 className="npv-title">Net Present Value (NPV)</h3>
                        <p>Most investments produce a series of cash flows over time. NPV adds up the present value of every future cash flow and subtracts the initial investment.</p>
                        <div className="formula-box">
                            NPV = &Sigma; [ CF<sub>t</sub> / (1 + r)<sup>t</sup> ] &minus; C<sub>0</sub>
                        </div>
                        <p className="formula-note">Where CF<sub>t</sub> = cash flow at time t, r = discount rate, C<sub>0</sub> = initial investment</p>
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Calculator" />
                    <p>Here is how $1,000 grows at an 8% annual rate over 5 years.</p>

                    <div className="card">
                        <div className="calc-tabs">
                            <button className="calc-tab active">Compute Future Value</button>
                            <button className="calc-tab">Compute Present Value</button>
                        </div>

                        <div className="calc-inputs">
                            <InputGroup label="Present Value ($)" value="1000" />
                            <InputGroup label="Annual Rate (%)" value="8" />
                            <InputGroup label="Years (n)" value="5" />
                        </div>

                        <div className="result-card">
                            <span className="result-label">Future Value</span>
                            <div className="result-value">$1,469.33</div>
                            <div className="result-meta">
                                <span>Rate: 8%</span>
                                <span>Periods: 5 years</span>
                                <span>FV = PV × (1 + r)ⁿ</span>
                            </div>
                        </div>

                        <div className="calc-timeline">
                            <TimelineNode year="Yr 0" value="$1,000" />
                            <TimelineNode year="Yr 1" value="$1,080" />
                            <TimelineNode year="Yr 2" value="$1,166" />
                            <TimelineNode year="Yr 3" value="$1,260" />
                            <TimelineNode year="Yr 4" value="$1,360" />
                            <TimelineNode year="Yr 5" value="$1,469" />
                        </div>
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Finance Overview"
                prevLink="/overview"
                nextText="Next: Debt"
                nextLink="/debt" />
        </div>
    )
};

export default Tvm;

import "./Alternatives.css";
import realEstate from "./images/real-estate.jpg";
import commodities from "./images/commodities.jpg";
import privateEquity from "./images/private-equity.jpg";
import hedgeFunds from "./images/hedge-funds.jpg";
import digitalAssets from "./images/digital-assets.jpg";
import privateCredit from "./images/private-credit.jpg";
import infrastructure from "./images/infrastructure.jpg";
import collectibles from "./images/collectibles-art.jpg";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import CorrelationRow from "../../components/correlation-row/CorrelationRow";
import AssetCard from "../../components/asset-card/AssetCard";
import StatItem from "../../components/stat-item/StatItem";
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

            <main className="container page-content">
                <section className="content-block">
                    <SectionTitle number="1" title="Why Alternatives?" />
                    <p>Traditional portfolios of stocks and bonds are exposed to the same economic forces, like recessions, interest rate changes, and market mood. <strong>Alternative investments</strong> often have a lower correlation to traditional assets, which gives a portfolio real diversification.</p>

                    <div className="card">
                        <span className="box-title">THE DIVERSIFICATION PRINCIPLE</span>
                        <div className="formula-box">
                            &sigma;<sup>2</sup><sub>portfolio</sub> = &Sigma; &Sigma; w<sub>i</sub> w<sub>j</sub> &sigma;<sub>i</sub> &sigma;<sub>j</sub> &rho;<sub>ij</sub>
                        </div>
                        <p className="formula-note">Portfolio variance depends on the <strong>correlation (&rho;)</strong> between assets. When &rho; is less than 1, combining assets lowers total risk without lowering expected return by the same amount. This is the math behind diversification.</p>
                    </div>

                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Asset</th>
                                    <th>Stocks</th>
                                    <th>Bonds</th>
                                    <th>Real Estate</th>
                                    <th>Gold</th>
                                    <th>Crypto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CorrelationRow asset="Stocks" stocks="1.00" bonds="-0.10" realEstate="0.58" gold="0.08" crypto="0.38" />
                                <CorrelationRow asset="Bonds" stocks="-0.10" bonds="1.00" realEstate="0.12" gold="0.28" crypto="-0.05" />
                                <CorrelationRow asset="Real Estate" stocks="0.58" bonds="0.12" realEstate="1.00" gold="0.18" crypto="0.22" />
                                <CorrelationRow asset="Gold" stocks="0.08" bonds="0.28" realEstate="0.18" gold="1.00" crypto="0.15" />
                                <CorrelationRow asset="Crypto" stocks="0.38" bonds="-0.05" realEstate="0.22" gold="0.15" crypto="1.00" />
                            </tbody>
                        </table>
                    </div>
                    <p className="table-note">Approximate historical correlations, for illustration. Values closer to 0, or negative, mean more diversification.</p>
                </section>

                <section className="content-block">
                    <SectionTitle number="2" title="Alternative Asset Classes" />

                    <div className="asset-grid">
                        <AssetCard
                            name="Real Estate"
                            src={realEstate}
                            category="Real Assets"
                            risk="Moderate"
                            typicalReturn="6-10%"
                            liquidity="Low"
                            description="Physical property such as residential, commercial, and industrial buildings. Returns come from rental income and price appreciation." />
                        <AssetCard
                            name="Commodities"
                            src={commodities}
                            category="Raw Assets"
                            risk="High"
                            typicalReturn="3-8%"
                            liquidity="High"
                            description="Raw materials like oil, gold, and agricultural products. Prices are driven by supply, demand, and the broader economy." />
                        <AssetCard
                            name="Private Equity"
                            src={privateEquity}
                            category="Private Markets"
                            risk="High"
                            typicalReturn="12-18%"
                            liquidity="Very Low"
                            description="Investment in private companies. Higher return potential than public markets, but capital is often locked up for 10 years or more." />
                        <AssetCard
                            name="Hedge Funds"
                            src={hedgeFunds}
                            category="Alternative Strategy"
                            risk="Variable"
                            typicalReturn="6-12%"
                            liquidity="Low"
                            description="Pooled funds that use strategies like long/short, arbitrage, and global macro to try to earn returns in any market." />
                        <AssetCard
                            name="Digital Assets"
                            src={digitalAssets}
                            category="Cryptocurrency"
                            risk="Very High"
                            typicalReturn="Highly Variable"
                            liquidity="High"
                            description="Decentralized digital currencies and tokens. Prices are volatile and speculative, and the rules around them are still changing." />
                        <AssetCard
                            name="Private Credit"
                            src={privateCredit}
                            category="Direct Lending"
                            risk="Moderate"
                            typicalReturn="8-12%"
                            liquidity="Very Low"
                            description="Loans made directly to companies by lenders that are not banks. They often pay higher yields than public bonds in exchange for less liquidity." />
                        <AssetCard
                            name="Infrastructure"
                            src={infrastructure}
                            category="Real Assets"
                            risk="Low to Moderate"
                            typicalReturn="5-9%"
                            liquidity="Low"
                            description="Essential assets like toll roads, utilities, pipelines, and airports. Revenue is often set by contracts or regulation and tends to rise with inflation." />
                        <AssetCard
                            name="Collectibles & Art"
                            src={collectibles}
                            category="Passion Assets"
                            risk="High"
                            typicalReturn="Highly Variable"
                            liquidity="Very Low"
                            description="Fine art, rare wine, classic cars, and other collectibles. They produce no income, so returns depend on what a buyer will pay later." />
                    </div>
                </section>

                <section className="content-block">
                    <SectionTitle number="3" title="Portfolio Allocation Explorer" />
                    <p>Compare three common allocation strategies and their risk and return profiles.</p>

                    <div className="card">
                        <div className="alloc-buttons">
                            <button className="alloc-btn">Conservative</button>
                            <button className="alloc-btn active">Balanced</button>
                            <button className="alloc-btn">Aggressive</button>
                        </div>

                        <div className="alloc-bar">
                            <div className="alloc-segment stocks">50% <span>Stocks</span></div>
                            <div className="alloc-segment bonds">35% <span>Bonds</span></div>
                            <div className="alloc-segment alts">15% <span>Alts</span></div>
                        </div>

                        <div className="alloc-stats">
                            <StatItem label="Expected Return" value="7.1%" />
                            <StatItem label="Risk Level" value="Moderate" />
                            <StatItem label="Sharpe Ratio" value="1.14" />
                        </div>
                    </div>
                </section>
            </main>

            <ModuleNav
                prevText="Equity"
                prevLink="/equity"
                nextText="Next: Applications"
                nextLink="/applications" />
        </div>
    )
};

export default Alternatives;

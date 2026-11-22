import "./Alternatives.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import PageHero from "../../components/page-hero/PageHero";
import SectionTitle from "../../components/section-title/SectionTitle";
import CorrelationRow from "../../components/correlation-row/CorrelationRow";
import AssetCard from "../../components/asset-card/AssetCard";
import AddAsset from "../../components/add-asset/AddAsset";
import Slideshow from "../../components/slideshow/Slideshow";
import StatItem from "../../components/stat-item/StatItem";
import ModuleNav from "../../components/module-nav/ModuleNav";

const Alternatives = () => {
    const [assets, setAssets] = useState([]);
    const [pending, setPending] = useState(true);

    const addAssetToList = (asset) => {
        setAssets((assets)=>[...assets, asset]);
    };

    const updateAssetInList = (updatedAsset) => {
        setAssets((assets)=>assets.map((asset)=>(asset._id === updatedAsset._id ? updatedAsset : asset)));
    };

    //after the page has loaded
    useEffect(()=>{
        const loadAssets = async()=>{
            const response = await axios.get(`${API_BASE_URL}/api/assets`);
            setPending(false);
            setAssets(response.data);
        };

        loadAssets();
    },[]);

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
                    <p>Click through the eight asset classes, then read about each one in the cards below.</p>

                    <Slideshow />

                    {pending && <p className="loading">Loading asset classes from the server. This can take up to a minute...</p>}

                    <div className="asset-grid">
                        {assets.map((asset)=>(
                            <AssetCard
                                key={asset._id}
                                _id={asset._id}
                                name={asset.name}
                                img_name={asset.img_name}
                                category={asset.category}
                                risk={asset.risk}
                                typicalReturn={asset.typical_return}
                                liquidity={asset.liquidity}
                                description={asset.description}
                                update_asset={updateAssetInList} />
                        ))}
                    </div>

                    <AddAsset add_asset_to_list={addAssetToList} />
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

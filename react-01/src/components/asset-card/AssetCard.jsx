import "./AssetCard.css";

const AssetCard = (props) => {
    return (
        <section className="asset-card">
            <img src={props.src} alt={props.name} />
            <div className="asset-body">
                <div className="asset-header">
                    <h3>{props.name}</h3>
                    <span className="asset-risk">{props.risk} Risk</span>
                </div>
                <span className="asset-category">{props.category}</span>
                <p>{props.description}</p>
                <div className="asset-footer">
                    <div>
                        <span className="asset-label">Typical Return</span>
                        <span className="asset-value">{props.typicalReturn}</span>
                    </div>
                    <div>
                        <span className="asset-label">Liquidity</span>
                        <span className="asset-value">{props.liquidity}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetCard;

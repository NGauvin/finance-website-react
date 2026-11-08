import "./AssetCard.css";
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const AssetCard = (props) => {
    const [open, setOpen] = useState(false);

    const openLightbox = () => {
        setOpen(true);
    };

    const closeLightbox = () => {
        setOpen(false);
    };

    const imageUrl = `https://finance-website-server.onrender.com/images/${props.src}`;

    return (
        <section className="asset-card">
            <button className="asset-image" aria-label="View larger picture" onClick={openLightbox}>
                <img src={imageUrl} alt={props.name} />
                <span className="zoom-hint">View larger</span>
            </button>
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

            <Lightbox
                open={open}
                close={closeLightbox}
                slides={[{src: imageUrl}]}
                render={{buttonPrev: () => null, buttonNext: () => null}} />
        </section>
    );
};

export default AssetCard;

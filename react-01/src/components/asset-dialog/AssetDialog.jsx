import "./AssetDialog.css";
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { API_BASE_URL } from "../../config";
import StatItem from "../stat-item/StatItem";

const AssetDialog = (props) => {
    const [open, setOpen] = useState(false);

    const openLightbox = () => {
        setOpen(true);
    };

    const closeLightbox = () => {
        setOpen(false);
    };

    const imageUrl = `${API_BASE_URL}/images/${props.img_name}`;

    return (
        <div className="asset-dialog">
            <div className="dialog-box">
                <button className="dialog-close" aria-label="Close" onClick={props.close_dialog}>&times;</button>
                <img src={imageUrl} alt={props.name} />

                <div className="dialog-body">
                    <span className="dialog-category">{props.category}</span>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>

                    <div className="dialog-stats">
                        <StatItem label="Risk" value={props.risk} />
                        <StatItem label="Typical Return" value={props.typicalReturn} />
                        <StatItem label="Liquidity" value={props.liquidity} />
                    </div>

                    <button className="btn btn-gold" onClick={openLightbox}>View Larger Picture</button>
                </div>
            </div>

            <Lightbox
                open={open}
                close={closeLightbox}
                slides={[{src: imageUrl}]}
                render={{buttonPrev: () => null, buttonNext: () => null}} />
        </div>
    );
};

export default AssetDialog;

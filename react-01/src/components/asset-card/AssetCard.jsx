import "./AssetCard.css";
import {useState} from "react";
import { API_BASE_URL } from "../../config";
import AssetDialog from "../asset-dialog/AssetDialog";

const AssetCard = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = () => {
        setShowDialog(false);
    };

    return (
        <>
            <section className="asset-card" onClick={showDetails}>
                <div className="asset-image">
                    <img src={`${API_BASE_URL}/images/${props.img_name}`} alt={props.name} />
                    <span className="zoom-hint">View details</span>
                </div>
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

            {showDialog && <AssetDialog
                    _id={props._id}
                    name={props.name}
                    img_name={props.img_name}
                    category={props.category}
                    risk={props.risk}
                    typicalReturn={props.typicalReturn}
                    liquidity={props.liquidity}
                    description={props.description}
                    update_asset={props.update_asset}
                    close_dialog={hideDetails} />}
        </>
    );
};

export default AssetCard;

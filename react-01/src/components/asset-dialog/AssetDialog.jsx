import "./AssetDialog.css";
import {useState} from "react";
import DetailsDialog from "./details-dialog/DetailsDialog";
import EditDialog from "./edit-dialog/EditDialog";

const AssetDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showDetails = () => {
        setShowContent("details");
    };

    const showEdit = () => {
        setShowContent("edit");
    };

    return (
        <div className="asset-dialog">
            <div className="dialog-box">
                <button className="dialog-close" aria-label="Close" onClick={props.close_dialog}>&times;</button>

                {showContent === "details" ? (
                    <DetailsDialog
                        name={props.name}
                        img_name={props.img_name}
                        category={props.category}
                        risk={props.risk}
                        typicalReturn={props.typicalReturn}
                        liquidity={props.liquidity}
                        description={props.description}
                        show_edit={showEdit} />
                ) : (
                    <EditDialog
                        _id={props._id}
                        name={props.name}
                        img_name={props.img_name}
                        category={props.category}
                        risk={props.risk}
                        typicalReturn={props.typicalReturn}
                        liquidity={props.liquidity}
                        description={props.description}
                        update_asset={props.update_asset}
                        show_details={showDetails} />
                )}
            </div>
        </div>
    );
};

export default AssetDialog;

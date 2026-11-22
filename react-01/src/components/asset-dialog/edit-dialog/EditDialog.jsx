import "./EditDialog.css";
import {useState} from "react";
import { API_BASE_URL } from "../../../config";

const EditDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState(`${API_BASE_URL}/images/${props.img_name}`);

    const uploadImage = (event) => {
        if (event.target.files.length > 0) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const editAssetOnServer = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(`${API_BASE_URL}/api/assets/${props._id}`, {
                method: "PUT",
                body: formData
            });

            if (response.status === 200) {
                setResult("Asset class updated!");
                props.update_asset(await response.json());

                //wait a moment so the message can be read, then go back to the details
                setTimeout(()=>{
                    props.show_details();
                }, 1500);
            } else {
                setResult("Error: " + await response.text());
            }
        } catch (error) {
            setResult("Could not reach the server. Please try again.");
        }
    };

    return (
        <div className="edit-dialog">
            <h2>Edit {props.name}</h2>

            <form onSubmit={editAssetOnServer}>
                <div className="form-grid">
                    <p>
                        <label htmlFor="edit-name">Name</label>
                        <input id="edit-name" type="text" name="name" defaultValue={props.name} required minLength="3" maxLength="40" />
                    </p>
                    <p>
                        <label htmlFor="edit-category">Category</label>
                        <input id="edit-category" type="text" name="category" defaultValue={props.category} required minLength="3" maxLength="40" />
                    </p>
                    <p>
                        <label htmlFor="edit-risk">Risk</label>
                        <select id="edit-risk" name="risk" defaultValue={props.risk} required>
                            <option value="">Choose a risk level</option>
                            <option value="Low">Low</option>
                            <option value="Low to Moderate">Low to Moderate</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                            <option value="Variable">Variable</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="edit-liquidity">Liquidity</label>
                        <select id="edit-liquidity" name="liquidity" defaultValue={props.liquidity} required>
                            <option value="">Choose a liquidity level</option>
                            <option value="Very Low">Very Low</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="edit-return">Typical Return</label>
                        <input id="edit-return" type="text" name="typical_return" defaultValue={props.typicalReturn} required minLength="2" maxLength="20" />
                    </p>
                    <p>
                        <label htmlFor="edit-img">New Picture (optional)</label>
                        <input id="edit-img" type="file" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </div>

                {prevSrc === "" ? ("") : (
                    <img className="img-preview" src={prevSrc} alt="Preview of the picture" />
                )}

                <p>
                    <label htmlFor="edit-description">Description</label>
                    <textarea id="edit-description" name="description" defaultValue={props.description} required minLength="10" maxLength="300"></textarea>
                </p>

                <div className="form-actions">
                    <button type="submit" className="btn btn-gold">Save Changes</button>
                    <button type="button" className="btn btn-outline" onClick={props.show_details}>Back</button>
                    <p className="result">{result}</p>
                </div>
            </form>
        </div>
    );
};

export default EditDialog;

import "./AddAsset.css";
import {useState} from "react";
import { API_BASE_URL } from "../../config";

const AddAsset = (props) => {
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("");

    const uploadImage = (event) => {
        if (event.target.files.length > 0) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const addAssetToServer = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(`${API_BASE_URL}/api/assets`, {
                method: "POST",
                body: formData
            });

            if (response.status === 200) {
                setResult("Asset class added! You can see it in the cards above.");
                props.add_asset_to_list(await response.json());
                form.reset();
                setPrevSrc("");
            } else {
                setResult("Error: " + await response.text());
            }
        } catch (error) {
            setResult("Could not reach the server. Please try again.");
        }
    };

    return (
        <section className="add-asset">
            <h3>Add an Asset Class</h3>
            <p className="add-intro">Know an alternative investment we missed? Add it here and it will show up with the cards above.</p>

            <form onSubmit={addAssetToServer}>
                <div className="form-grid">
                    <p>
                        <label htmlFor="asset-name">Name</label>
                        <input id="asset-name" type="text" name="name" placeholder="e.g. Farmland" required minLength="3" maxLength="40" />
                    </p>
                    <p>
                        <label htmlFor="asset-category">Category</label>
                        <input id="asset-category" type="text" name="category" placeholder="e.g. Real Assets" required minLength="3" maxLength="40" />
                    </p>
                    <p>
                        <label htmlFor="asset-risk">Risk</label>
                        <select id="asset-risk" name="risk" required>
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
                        <label htmlFor="asset-liquidity">Liquidity</label>
                        <select id="asset-liquidity" name="liquidity" required>
                            <option value="">Choose a liquidity level</option>
                            <option value="Very Low">Very Low</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="asset-return">Typical Return</label>
                        <input id="asset-return" type="text" name="typical_return" placeholder="e.g. 5-8%" required minLength="2" maxLength="20" />
                    </p>
                    <p>
                        <label htmlFor="asset-img">Picture</label>
                        <input id="asset-img" type="file" name="img" accept="image/*" required onChange={uploadImage} />
                    </p>
                </div>

                {prevSrc === "" ? ("") : (
                    <img className="img-preview" src={prevSrc} alt="Preview of the chosen picture" />
                )}

                <p>
                    <label htmlFor="asset-description">Description</label>
                    <textarea id="asset-description" name="description" placeholder="What is it, and where do its returns come from?" required minLength="10" maxLength="300"></textarea>
                </p>

                <div className="form-actions">
                    <button type="submit" className="btn btn-gold">Add Asset Class</button>
                    <p className="result">{result}</p>
                </div>
            </form>
        </section>
    );
};

export default AddAsset;

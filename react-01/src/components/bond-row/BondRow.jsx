import "./BondRow.css";

const BondRow = (props) => {
    return (
        <tr className="bond-row">
            <td><strong>{props.type}</strong></td>
            <td>{props.issuer}</td>
            <td><span className={props.riskClass}>{props.risk}</span></td>
            <td>{props.typicalYield}</td>
        </tr>
    );
};

export default BondRow;

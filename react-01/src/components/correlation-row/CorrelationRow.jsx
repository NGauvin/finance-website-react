import "./CorrelationRow.css";

const CorrelationRow = (props) => {
    return (
        <tr className="correlation-row">
            <td><strong>{props.asset}</strong></td>
            <td>{props.stocks}</td>
            <td>{props.bonds}</td>
            <td>{props.realEstate}</td>
            <td>{props.gold}</td>
            <td>{props.crypto}</td>
        </tr>
    );
};

export default CorrelationRow;

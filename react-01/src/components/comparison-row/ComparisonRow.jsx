import "./ComparisonRow.css";

const ComparisonRow = (props) => {
    return (
        <tr className="comparison-row">
            <td><strong>{props.label}</strong></td>
            <td>{props.debt}</td>
            <td>{props.equity}</td>
        </tr>
    );
};

export default ComparisonRow;

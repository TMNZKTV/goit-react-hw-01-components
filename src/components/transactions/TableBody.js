import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ id, type, amount, currency, i }) => {
  return (
    <tbody>
      <tr key={id}>
        <td key={i}>{type}</td>
        <td key={i}>{amount}</td>
        <td key={i}>{currency}</td>
      </tr>
    </tbody>
  );
};

TableBody.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableBody;

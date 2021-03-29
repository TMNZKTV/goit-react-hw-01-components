import React from "react";
import PropTypes from "prop-types";
import styles from "../TableBody/TableBody.module.css";

const TableBody = ({ id, type, amount, currency, i }) => {
  return (
    <tbody className={styles.table__body}>
      <tr key={id}>
        <td key={i} className={styles.table__data}>
          {type}
        </td>
        <td key={i} className={styles.table__data}>
          {amount}
        </td>
        <td key={i} className={styles.table__data}>
          {currency}
        </td>
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

import React from "react";
import PropTypes from "prop-types";
import styles from "../TableRow/TableRow.module.css";

const TableRow = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.table__data}>{type}</td>
      <td className={styles.table__data}>{amount}</td>
      <td className={styles.table__data}>{currency}</td>
    </>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableRow;

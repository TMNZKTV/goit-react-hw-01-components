import React from "react";
import PropTypes from "prop-types";
import styles from "../TableHead/TableHead.module.css";

const TableHead = ({ id }) => {
  return (
    <thead className={styles.table__head}>
      <tr key={id}>
        <th className={styles.table__data}>TYPE</th>
        <th className={styles.table__data}>AMOUNT</th>
        <th className={styles.table__data}>CURRENCY</th>
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  id: PropTypes.string,
};

export default TableHead;

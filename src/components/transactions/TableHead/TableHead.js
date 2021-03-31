import React from "react";
import styles from "../TableHead/TableHead.module.css";

const TableHead = () => {
  return (
    <thead className={styles.table__head}>
      <tr>
        <th className={styles.table__data}>TYPE</th>
        <th className={styles.table__data}>AMOUNT</th>
        <th className={styles.table__data}>CURRENCY</th>
      </tr>
    </thead>
  );
};

export default TableHead;

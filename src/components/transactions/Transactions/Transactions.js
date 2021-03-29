import React from "react";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import styles from "../Transactions/Transactions.module.css";

const Transactions = ({ items }) => {
  return (
    <table className={styles.table}>
      <TableHead id={items.id} />

      {items.map(({ id, type, amount, currency, index }) => (
        <TableBody
          id={id}
          type={type}
          amount={amount}
          currency={currency}
          i={index}
        />
      ))}
    </table>
  );
};

export default Transactions;

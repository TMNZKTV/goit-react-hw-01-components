import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Transactions = ({ items }) => {
  return (
    <table className="transaction-history">
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

import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ id }) => {
  return (
    <thead>
      <tr key={id}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  id: PropTypes.string,
};

export default TableHead;

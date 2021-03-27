import React from "react";
import Stat from "./Stat";
import PropTypes from "prop-types";

const StatsList = ({ stats }) => (
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <li key={id}>
        <Stat label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StatsList;

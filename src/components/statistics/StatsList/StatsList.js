import React from "react";
import Stat from "../Stat/Stat";
import PropTypes from "prop-types";
import styles from "../StatsList/StatsList.module.css";

function randomColor() {
  const randomizer = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomizer;

  return color;
}

const StatsList = ({ stats }) => (
  <ul className={styles.stats__list}>
    {stats.map(({ id, label, percentage }) => (
      <li
        key={id}
        className={styles.stats__item}
        style={{ backgroundColor: randomColor() }}
      >
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

import React from "react";
import PropTypes from "prop-types";
import styles from "../StatisticsItem/StatisticsItem.module.css";

function randomColor() {
  const randomizer = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomizer;

  return color;
}

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={styles.stats__item}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;

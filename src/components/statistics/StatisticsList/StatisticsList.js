import React from "react";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";
import styles from "../StatisticsList/StatisticsList.module.css";

function randomColor() {
  const randomizer = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomizer;

  return color;
}

const StatisticsList = ({ stats }) => (
  <ul className={styles.stats__list}>
    {stats.map(({ id, label, percentage }) => (
      <li
        key={id}
        className={styles.stats__item}
        style={{ backgroundColor: randomColor() }}
      >
        <StatisticsItem label={label} percentage={percentage} id={id} />
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StatisticsList;

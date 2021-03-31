import React from "react";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";
import styles from "../StatisticsList/StatisticsList.module.css";

const StatisticsList = ({ stats }) => (
  <ul className={styles.stats__list}>
    {stats.map(({ id, label, percentage }) => (
      <StatisticsItem label={label} percentage={percentage} key={id} />
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

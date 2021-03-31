import React from "react";
import PropTypes from "prop-types";
import styles from "../StatisticsItem/StatisticsItem.module.css";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;

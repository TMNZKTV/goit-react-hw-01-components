import React from "react";
import StatisticsList from "../StatisticsList/StatisticsList";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.section}>
      {{ title } ? <h1>{title.toUpperCase()}</h1> : ""}
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
};
export default Statistics;

import React from "react";
import StatsList from "../StatsList/StatsList";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ title, stats, colors }) => {
  return (
    <section className={styles.section}>
      {{ title } ? <h1>{title.toUpperCase()}</h1> : ""}

      <StatsList stats={stats} colors={colors} />
    </section>
  );
};

Statistics.defaulProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
};
export default Statistics;

import React from "react";
import StatsList from "./StatsList";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h1 className="title">{title.toUpperCase()}</h1>
      <StatsList stats={stats} />
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

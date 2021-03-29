import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileStatsList.module.css";

const ProfileStatsList = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {Object.keys(stats).map((key) => (
        <li key={key} className={styles.item}>
          <span className={styles.item__desc}>{key}</span>
          <span className={styles.item__numbers}>{stats[key]}</span>
        </li>
      ))}
    </ul>
  );
};

ProfileStatsList.defaultProps = {
  key: "",
};

ProfileStatsList.propTypes = {
  key: PropTypes.string,
};

export default ProfileStatsList;

import React from "react";
import PropTypes from "prop-types";

const ProfileStatsList = ({ stats }) => {
  return (
    <ul className="stats">
      {Object.keys(stats).map((key) => (
        <li key={key}>
          <span>{key}</span>
          <span>{stats[key]}</span>
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

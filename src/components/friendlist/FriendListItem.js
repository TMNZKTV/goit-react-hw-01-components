import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, id }) => {
  return (
    <li key={id}>
      <span className="status"></span>
      <img src={avatar} alt="img" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;

import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ name, avatar, id }) => (
      <FriendListItem avatar={avatar} name={name} id={id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

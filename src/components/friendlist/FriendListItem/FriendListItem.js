import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img src={avatar} alt="img" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

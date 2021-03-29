import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import styles from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(({ name, avatar, id, isOnline }) => (
      <FriendListItem avatar={avatar} name={name} id={id} isOnline={isOnline} />
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

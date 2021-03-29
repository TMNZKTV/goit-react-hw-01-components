import React from "react";
import styles from "./ProfileDescription.module.css";

const ProfileDescription = ({ name, tag, location, avatar }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="avatar icon" width="50%" className={styles.pic} />
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>@{tag}</p>
      <p className={styles.text}>{location}</p>
    </div>
  );
};

export default ProfileDescription;

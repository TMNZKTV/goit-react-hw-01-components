import React from "react";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import ProfileStatsList from "../ProfileStatsList/ProfileStatsList";
import PropTypes from "prop-types";
import DefaultImage from "../ProfileData/default-image.jpg";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ProfileStatsList stats={stats} />
    </div>
  );
};

Profile.defaultProps = {
  avatar: DefaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Profile;
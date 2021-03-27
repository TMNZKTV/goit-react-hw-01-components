import React from "react";

const ProfileDescription = ({ name, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt="avatar icon" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

export default ProfileDescription;

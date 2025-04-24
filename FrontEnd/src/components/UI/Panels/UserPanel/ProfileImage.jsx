// import React from "react";
import styles from "./UserProfile.module.css";
import { BiSolidUser } from "react-icons/bi";
const ProfileImage = () => {
  return (
    <div className={styles.profileImageContainer}>
      <BiSolidUser className={styles.profileImage} />
    </div>
  );
};

export default ProfileImage;

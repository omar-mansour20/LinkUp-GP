import { useState } from "react";
import styles from "./UserProfile.module.css";
import { IoClose } from "react-icons/io5";
// import ProfileCard from "./ProfileInfo";
const ProfileClose = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.profileHeader}>
      <span>Profile</span>
      <button className={styles.closeButton} onClick={handleClose}>
        <IoClose className={styles.closeIcon} />
      </button>
    </div>
  );
};

export default ProfileClose;

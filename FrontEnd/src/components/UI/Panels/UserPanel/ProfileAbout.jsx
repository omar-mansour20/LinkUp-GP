// import React from "react";
import styles from "./UserProfile.module.css";
import PropTypes from "prop-types";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa6";
const ProfileAbout = ({ emailAddress, phone }) => {
  return (
    <div className={styles.profileAbout}>
      <h3 className={styles.aboutTitle}>Contact Information</h3>
      <div className={styles.aboutCard}>
        <div className={styles.aboutLeft}>
          <IoMailOutline className={styles.icons} />
          <p className={styles.aboutText}>
            <strong>Email Address</strong> <br /> <span> {emailAddress} </span>
          </p>
        </div>
        <FaRegCopy className={styles.copyIcon} />
      </div>
      <div className={styles.aboutCard}>
        <div className={styles.aboutLeft}>
          <FiPhone className={styles.icons} />
          <p className={styles.aboutText}>
            <strong>Phone</strong> <br />
            <span> {phone} </span>
          </p>
        </div>
        <FaRegCopy className={styles.copyIcon} />
      </div>
    </div>
  );
};
ProfileAbout.propTypes = {
  children: PropTypes.node.isRequired,
  emailAddress: PropTypes.string,
  phone: PropTypes.string,
};
export default ProfileAbout;

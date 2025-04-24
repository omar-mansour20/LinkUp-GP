// import React from "react";
import styles from "./Profile.module.css";
import IconDropdown from "../../../Dropdown/IconDropdown";
import { BiSolidUser } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { RiUserForbidLine } from "react-icons/ri";
const UserProfile = () => {
  const huddleItems = [
    { label: "Start Huddle", icon: <FiHeadphones /> },
    { label: "Join Huddle", icon: <IoIosLink /> },
  ];
  return (
    <div className={styles.upperSection}>
      <div className={styles.profileContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.profileDetails}>
            <BiSolidUser className={styles.profileImage} />
            <div className={styles.info}>
              <div className={styles.name}>User</div>
              <p className={styles.role}>
                <span>Backend Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <IconDropdown
          icon={<FaRegStar />}
          label=""
          items={<IoIosArrowDown />}
        />
        <IconDropdown icon={<FaRegBell />} label="Mute" items={""} />
        <IconDropdown icon={<FiUserPlus />} label="VIP" items={""} />
        <IconDropdown icon={<RiUserForbidLine />} label="Hide" items={""} />
        <IconDropdown
          icon={<FiHeadphones />}
          label="Huddle"
          items={huddleItems}
        />
      </div>
    </div>
  );
};

export default UserProfile;

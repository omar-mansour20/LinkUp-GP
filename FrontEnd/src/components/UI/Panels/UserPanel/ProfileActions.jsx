import styles from "./UserProfile.module.css";
import { LuMessageCircle } from "react-icons/lu";
import { HiOutlineUserAdd } from "react-icons/hi";
import IconDropdown from '../../Dropdown/IconDropdown';
import MoreDropdown from "../../Dropdown/MoreDropdown";
import { FiHeadphones } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import Button from "../../Button/Button";
// import { IoIosArrowDown } from "react-icons/io";

const ProfileActions = () => {
  const moreMenuItems = [
    { label: "Copy display name: @user" },
    { label: "Share contact" },
    { label: "View files" },
    { label: "Copy member ID" },
    { label: "Copy link to profile" },
    { label: "Hide user", isDanger: true },
  ];
  const items = [
    { label: "Start Huddle", icon: <FiHeadphones /> },
    { label: "Join Huddle", icon: <IoIosLink /> },
  ];
  return (
    <div className={styles.profileActions}>
      <Button className={styles.button} icon={<LuMessageCircle />}>
        Message
      </Button>

      <IconDropdown icon={<FiHeadphones />} label="Huddle" items={items}>
        {/* <IoIosArrowDown /> */}
      </IconDropdown>
      <Button className={styles.button} icon={<HiOutlineUserAdd />}>
        VIP
      </Button>

      <MoreDropdown items={moreMenuItems} />
    </div>
  );
};

export default ProfileActions;

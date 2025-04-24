
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";
import ProfileAbout from "./ProfileAbout";
import styles from "./UserProfile.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeChatPanel } from "../../../../API/redux_toolkit/ui/chatPanel";
const ProfileCard = () => {
  const { userPanel } = useSelector((state) => state.chatPanel);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeChatPanel());
  };

    if (!userPanel) return null;

  return (
    <div className={styles.profileCard}>
      {/* Header Bar with Close Button */}
      <div className={styles.profileHeader}>
        <span>Profile</span>
        <button className={styles.closeButton} onClick={handleClose}>
          <IoCloseSharp />
        </button>
      </div>

      <ProfileImage />
      <ProfileInfo
        name="User"
        jobTitle="Backend Developer"
        gender="He/Him"
        status="Away"
        localTime="6:20 AM local time"
      />
      <ProfileActions />
      <ProfileAbout emailAddress="user@gmail.com" phone="01012345678" />
    </div>
  );
};

export default ProfileCard;

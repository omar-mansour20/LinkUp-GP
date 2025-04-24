import PropTypes from "prop-types";
import styles from "./UserProfile.module.css";
import { LuClock3 } from "react-icons/lu";
const ProfileInfo = ({ name, jobTitle, gender, status, localTime }) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.info}>
        <div className={styles.user}>
          <span className={styles.name}>{name}</span>
          <span className={styles.jobTitle}>{jobTitle}</span>
          <span className={styles.gender}>{gender}</span>
        </div>
        <p className={styles.status}>
          <span className={styles.statusIcon}></span> {status}
        </p>
        <div className={styles.local}>
          <LuClock3 className={styles.clockIcon} />
          <p className={styles.localTime}>{localTime}</p>
        </div>
      </div>
    </div>
  );
};
ProfileInfo.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  localTime: PropTypes.string,
};
export default ProfileInfo;

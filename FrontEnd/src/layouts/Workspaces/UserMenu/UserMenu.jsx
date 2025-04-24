import styles from "./UserMenu.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SetStatusModal from "../../../components/UI/Modal/SetStatusModal/SetStatus"; // ✅ استيراد المودال

function UserMenu() {
  const [hoverPause, setHoverPause] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false); // ✅ حالة المودال
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/user-dm");
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.profile}>
        <FaUserCircle size={20} />
        <span>User</span>
        <span className={styles.statusDot}></span>
      </div>

      <div className={styles.option} onClick={() => setShowStatusModal(true)}>
        Update your status
      </div>

      <div className={styles.option}>Set yourself as away</div>

      <div
        className={styles.option}
        onMouseEnter={() => setHoverPause(true)}
        onMouseLeave={() => setHoverPause(false)}
      >
        Pause notifications
        <IoIosArrowForward size={14} className={styles.arrowIcon} />
        {hoverPause && (
          <div className={styles.subDropdown}>
            <div className={styles.subOption}>For 30 minutes</div>
            <div className={styles.subOption}>For 1 hour</div>
            <div className={styles.subOption}>For 2 hours</div>
            <div className={styles.subOption}>Until tomorrow</div>
            <div className={styles.subOption}>Until next week</div>
            <div className={styles.subOption}>Custom...</div>
          </div>
        )}
      </div>

      <div className={styles.option} onClick={handleProfileClick}>
        Profile
      </div>
      <div className={styles.option}>Preferences</div>
      <div className={styles.option}>Upgrade :)</div>
      <div className={styles.option}>Sign out :)</div>

      {showStatusModal && (
        <SetStatusModal
          isOpen={showStatusModal}
          onClose={() => setShowStatusModal(false)}
        />
      )}
    </div>
  );
}

export default UserMenu;

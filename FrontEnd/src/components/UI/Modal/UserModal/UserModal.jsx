import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UserModal.module.css";
import Modal from "../Modal";
import UserProfile from "./ProfileUp/Profile";
import NavigationTabs from "./Navbar/Nav";
import About from "./Navbar/AboutSection/About";
import Tabs from "./Navbar/TabSection/Tabs";
import Integrations from "./Navbar/IntegrationsSection/Integrations";

const UserModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.largeModal}
      zIndex={1002}
    >
      <div className={styles.upper}>
        <UserProfile />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className={styles.lower}>
        {activeTab === "About" && <About />}
        {activeTab === "Tabs" && <Tabs />}
        {activeTab === "Integrations" && <Integrations />}
      </div>
    </Modal>
  );
};

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserModal;

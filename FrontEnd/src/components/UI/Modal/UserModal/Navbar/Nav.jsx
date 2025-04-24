import styles from "./Nav.module.css";
import PropTypes from "prop-types";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { label: "About", id: "About" },
    { label: "Tabs", id: "Tabs" },
    { label: "Integrations", id: "Integrations" },
  ];

  return (
    <div className={styles.navContainer}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navButton} ${
            activeTab === item.id ? styles.active : ""
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

NavigationTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default NavigationTabs;

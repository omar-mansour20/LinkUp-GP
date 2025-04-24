// import React from "react";
import styles from "./Tabs.module.css";
import IconDropdown from "../../../../Dropdown/IconDropdown";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPin } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
const Tabs = () => {
  return (
    <>
      <div className={styles.permissionsSection}>
        <label htmlFor="permissions" className={styles.label}>
          Choose who can add, remove, and reorder tabs
        </label>
        <select id="permissions" className={styles.dropdown} disabled>
          <option>Everyone</option>
          {/* <option>Admins only</option>
          <option>Custom</option> */}
        </select>
      </div>

      <div className={styles.manageTabsSection}>
        <h3 className={styles.manageTabsTitle}>Manage tabs</h3>
        <p className={styles.manageTabsDescription}>
          Reorder, add, remove, and hide the tabs that everyone sees in this
          channel.
        </p>
        <ul className={styles.tabsList}>
          <li className={styles.tabMsg}>
            <LuMessageCircle className={styles.icon} /> Messages
          </li>
          <li className={styles.tabItem}>
            <FaRegFileAlt className={styles.icon} /> Weekly Sync
          </li>
          <li className={styles.tabItem}>
            <FiLayers className={styles.icon} /> Files
          </li>
          <li className={`${styles.tabItem} ${styles.hidden}`}>
            <AiOutlineThunderbolt className={styles.icon} /> Workflows{" "}
            <span className={styles.hiddenLabel}>Hidden</span>
          </li>
          <li className={`${styles.tabItem} ${styles.hidden}`}>
            <GoPin className={styles.icon} /> Pins{" "}
            <span className={styles.hiddenLabel}>Hidden</span>
          </li>
        </ul>
        <IconDropdown icon={<FaPlus />} label="New tab" items={""} />
      </div>
    </>
  );
};

export default Tabs;

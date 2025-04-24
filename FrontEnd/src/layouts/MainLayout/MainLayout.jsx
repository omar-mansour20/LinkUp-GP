import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Workbar from "../Workspaces/Workbar";
import styles from "./MainLayoutStyles.module.css";
import { Outlet, useLocation } from "react-router-dom";
function MainLayout() {
  const location = useLocation();
  const isBrowseChannels = location.pathname === "/browse-channels";
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.workspace_content}>
        <Workbar />
        {isBrowseChannels ? (
          <div className={styles.page_conetnt}>
            <Outlet />
          </div>
        ) : (
          <div className={styles.page_conetnt}>
            <Sidebar />
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

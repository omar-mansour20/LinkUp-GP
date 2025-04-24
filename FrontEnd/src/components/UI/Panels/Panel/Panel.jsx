import { useSelector } from "react-redux";
import ThreadPanel from "../ThreadPanel/ThreadPanel";
import ProfileCard from "../UserPanel/ProfileCard";
import styles from "./Panel.module.css";


function Panel() {
  const { threadPanel, userPanel } = useSelector((state) => state.chatPanel);

  if (!threadPanel && !userPanel) return;
  return (
    <div className={styles.panel}>
      <ThreadPanel />
      <ProfileCard/>
    </div>
  );
}

export default Panel;

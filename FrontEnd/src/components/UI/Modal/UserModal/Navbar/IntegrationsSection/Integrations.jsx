import styles from "./integrations.module.css";
import { FiMail } from "react-icons/fi";

const Integrations = () => {
  return (
    <div className={styles.emailSectionContainer}>
      <div className={styles.iconContainer}>
        <FiMail className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Send emails to this conversation</h3>
        <p className={styles.description}>
          Get an email address that posts incoming emails in this conversation.
        </p>
      </div>
    </div>
  );
};

export default Integrations;

import PropTypes from "prop-types";
import styles from "./ContentPage.module.css";
import Panel from "../../../components/UI/Panels/Panel/Panel";

function ContentPage({ children }) {
  return (
    <div className={styles.content_page}>
      <div className={styles.conetnt}>{children}</div>
      <Panel />
    </div>
  );
}

export default ContentPage;

ContentPage.propTypes = {
  children: PropTypes.any.isRequired,
};

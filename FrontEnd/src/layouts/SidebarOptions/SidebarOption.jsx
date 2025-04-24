import styles from "./SidebarOption.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SidebarRow({ Icon, title, id }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate(`/${title}`);
    }
  };

  return (
    <div className={styles.sidebarOption} onClick={selectChannel}>
      {Icon && (
        <img src={Icon} alt={title} className={styles.sidebarOption__icon} />
      )}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={styles.sidebarOption__channel}>
          <span className={styles.sidebarOption__hash}>#</span> {title}
        </h3>
      )}
    </div>
  );
}

SidebarRow.propTypes = {
  Icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default SidebarRow;

import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children, className, zIndex = 1000 }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className={styles.overlay}
        style={{ zIndex: zIndex - 1 }}
        onClick={onClose}
      ></div>
      <div className={`${styles.modal} ${className}`} style={{ zIndex }}>
        <IoClose className={styles.closeModal} onClick={onClose} />
        {children}
      </div>
    </>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  zIndex: PropTypes.number.isRequired,
};

export default Modal;

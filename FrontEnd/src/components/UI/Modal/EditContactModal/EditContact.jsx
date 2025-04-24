import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styles from "./EditContact.module.css";
import { FaLock } from "react-icons/fa";
const EditContactModal = ({ isOpen, onClose, userData }) => {
  const [phone, setPhone] = useState(userData.phone || "");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Phone:", phone);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.contactModal}
      zIndex={1002}
    >
      <h2>Edit Contact information</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.mailLabel}>
          {" "}
          <FaLock className={styles.icon} />
          Email Address
        </label>
        <input
          type="email"
          value={userData.email}
          readOnly
          className={styles.readOnlyInput}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={handleChange}
          className={styles.phoneInput}
        />

        <div className={styles.buttons}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </Modal>
  );
};

EditContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
  }).isRequired,
};

export default EditContactModal;

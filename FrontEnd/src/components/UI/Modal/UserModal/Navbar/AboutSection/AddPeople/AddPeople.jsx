import PropTypes from "prop-types";
import Modal from "../../../../Modal";
import styles from "./AddPeople.module.css";
import Button from "../../../../../Button/Button";
const AddPeopleModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.smallModal}
      zIndex={1004}
    >
      <h2 className={styles.title}>Add people to this conversation</h2>
      <input
        type="text"
        placeholder="ex. Matt or @mbrewer"
        className={styles.inputField}
      />
      <p className={styles.hint}>
        DMs can have up to 9 people (including you).
      </p>
      <Button className={styles.nextButton}>Next</Button>
    </Modal>
  );
};

AddPeopleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddPeopleModal;

import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styles from "./UploadProfilePhoto.module.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineFileImage } from "react-icons/ai";
import Button from "../../Button/Button";

const UploadProfilePhotoModal = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.modal}
      zIndex="1002"
    >
      <h2 className={styles.title}>Add a profile photo</h2>

      <div className={styles.uploadContainer}>
        <label htmlFor="fileUpload" className={styles.uploadBox}>
          {selectedFile ? (
            <img src={selectedFile} alt="Preview" className={styles.preview} />
          ) : (
            <div className={styles.uploadPlaceholder}>
              <AiOutlineFileImage className={styles.placeholderPhoto} />
              <p>Drag your photo here, or...</p>
              <Button className={styles.browseButton}>
                <label htmlFor="fileUpload">Browse Files</label>
              </Button>
            </div>
          )}
          <input
            type="file"
            id="fileUpload"
            className={styles.fileInput}
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className={styles.previewContainer}>
        <p>Preview</p>
        <div className={styles.profilePreview}>
          {selectedFile ? (
            <div className={styles.image}>
              <img
                src={selectedFile}
                alt="Profile"
                className={styles.profileImg}
              />
            </div>
          ) : (
            <div className={styles.image}>
              <FaUser className={styles.profileIcon} />
            </div>
          )}
          <span className={styles.name}>
            Alaa Alsoudy <span className={styles.time}>9:41 AM</span>
          </span>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </Button>
        <Button className={styles.saveButton}>Save</Button>
      </div>
    </Modal>
  );
};

UploadProfilePhotoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UploadProfilePhotoModal;

import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styles from "./SetStatus.module.css";
// import { FaRegTimesCircle } from "react-icons/fa";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { MdCommute, MdSick, MdBeachAccess, MdWork } from "react-icons/md";
// import { BsCalendarEvent } from "react-icons/bs";
import Button from "../../Button/Button";
const statusOptions = [
  { icon: "📅", text: "In a meeting", duration: "1 hour" },
  { icon: "🚎", text: "Commuting", duration: "30 minutes" },
  { icon: "🤒", text: "Out sick", duration: "Today" },
  { icon: "🌴", text: "Vacationing", duration: "Don't clear" },
  { icon: "🏡", text: "Working remotely", duration: "Today" },
];

const SetStatusModal = ({ isOpen, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <h2 className={styles.title}>Set a status</h2>

      <input
        type="text"
        placeholder="What's your status?"
        className={styles.statusInput}
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      />

      <div className={styles.statusList}>
        {statusOptions.map((option, index) => (
          <div
            key={index}
            className={`${styles.statusOption} ${
              selectedStatus === option.text ? styles.selected : ""
            }`}
            onClick={() => setSelectedStatus(option.text)}
          >
            {option.icon}
            <span className={styles.statusText}>{option.text}</span>
            <span className={styles.statusDuration}>{option.duration}</span>
          </div>
        ))}
      </div>

      <div className={styles.autoUpdate}>
        {/* <BsCalendarEvent className={styles.calendarIcon} /> */}
        <span>📆 In a meeting — Based on your Google Calendar</span>
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

SetStatusModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SetStatusModal;

// import { useState } from "react";
// import PropTypes from "prop-types"; // استيراد PropTypes
// import Modal from "../Modal";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import styles from "./EditStartDate.module.css";
// import Button from "../../Button/Button";
// const EditDateModal = ({ isOpen, onClose }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const goToPrevMonth = () => {
//     setCurrentMonth(
//       new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
//     );
//   };

//   const goToNextMonth = () => {
//     setCurrentMonth(
//       new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
//     );
//   };

//   const renderDays = () => {
//     const firstDayOfMonth = new Date(
//       currentMonth.getFullYear(),
//       currentMonth.getMonth(),
//       1
//     ).getDay();
//     const daysInMonth = new Date(
//       currentMonth.getFullYear(),
//       currentMonth.getMonth() + 1,
//       0
//     ).getDate();

//     const days = [];
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//       const date = new Date(
//         currentMonth.getFullYear(),
//         currentMonth.getMonth(),
//         i
//       );
//       days.push(
//         <div
//           key={i}
//           className={`${styles.day} ${
//             selectedDate?.toDateString() === date.toDateString()
//               ? styles.selected
//               : ""
//           }`}
//           onClick={() => handleDateChange(date)}
//         >
//           {i}
//         </div>
//       );
//     }
//     return days;
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Edit About Me">
//       <div className={styles.container}>
//         <label className={styles.label}>Start Date</label>
//         <div
//           className={styles.dateInput}
//           onClick={() => setSelectedDate(new Date())}
//         >
//           {selectedDate ? selectedDate.toDateString() : "Select date"}
//         </div>

//         {selectedDate && (
//           <div className={styles.calendar}>
//             <div className={styles.header}>
//               <FaChevronLeft className={styles.icon} onClick={goToPrevMonth} />
//               <span>
//                 {currentMonth.toLocaleString("default", {
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </span>
//               <FaChevronRight className={styles.icon} onClick={goToNextMonth} />
//             </div>
//             <div className={styles.daysGrid}>{renderDays()}</div>
//           </div>
//         )}

//         <div className={styles.actions}>
//           <Button className={styles.cancel} onClick={onClose}>
//             Cancel
//           </Button>
//           <Button
//             className={styles.save}
//             onClick={() => console.log("Date Saved:", selectedDate)}
//           >
//             Save Changes
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// // 🟢 تعريف PropTypes علشان نتأكد من صحة الـ props
// EditDateModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // لازم يكون Boolean
//   onClose: PropTypes.func.isRequired, // لازم يكون Function
// };

// export default EditDateModal;

import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCalendarAlt,
} from "react-icons/fa";
import styles from "./EditStartDate.module.css";
import Button from "../../Button/Button";

const EditDateModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    // <Modal isOpen={isOpen} onClose={onClose} title="Edit About Me">
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.contactModal}
      zIndex={1002}
    >
      <div className={styles.container}>
        <h2>Edit About me</h2>
        <label className={styles.label}>Start Date</label>
        <div className={styles.datePickerWrapper}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            showPopperArrow={false}
            calendarClassName={styles.customCalendar}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              decreaseYear,
              increaseYear,
            }) => (
              <div className={styles.header}>
                <FaAngleDoubleLeft
                  className={styles.icon}
                  onClick={decreaseYear}
                />
                <FaChevronLeft
                  className={styles.icon}
                  onClick={decreaseMonth}
                />
                <span>
                  {date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <FaChevronRight
                  className={styles.icon}
                  onClick={increaseMonth}
                />
                <FaAngleDoubleRight
                  className={styles.icon}
                  onClick={increaseYear}
                />
              </div>
            )}
            customInput={
              <div className={styles.dateInput}>
                <FaCalendarAlt className={styles.calendarIcon} />
                {selectedDate ? selectedDate.toDateString() : "Select date"}
              </div>
            }
          />
        </div>
        <div className={styles.actions}>
          <Button className={styles.cancel} onClick={onClose}>
            Cancel
          </Button>
          <Button
            className={styles.save}
            onClick={() => console.log("Date Saved:", selectedDate)}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

EditDateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditDateModal;

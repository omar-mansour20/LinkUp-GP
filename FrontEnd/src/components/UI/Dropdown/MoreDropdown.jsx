// import { useState, useRef, useEffect, useCallback } from "react";
// import styles from "./Dropdown.module.css";
// import Button from "../Button/Button";
// import { IoMdMore } from "react-icons/io";

// const MoreDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const handleClickOutside = useCallback((event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [handleClickOutside]);

//   return (
//     <div className={styles.dropdownContainer} ref={dropdownRef}>
//       <Button onClick={() => setIsOpen(!isOpen)} icon={<IoMdMore />} />

//       {isOpen && (
//         <div className={styles.dropdownMenu}>
//           <p className={styles.normalUser}>Copy display name: @user</p>
//           <p className={styles.normalUser}>Share contact</p>
//           <p className={styles.normalUser}>View files</p>
//           <p className={styles.normalUser}>Copy member ID</p>
//           <p className={styles.normalUser}>Copy link to profile</p>
//           <p className={styles.hideUser}>Hide user</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoreDropdown;

import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
import Button from "../Button/Button";
import { IoMdMore } from "react-icons/io";

const MoreDropdown = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)} icon={<IoMdMore />} />

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {items.map((item, index) => (
            <p
              key={index}
              className={item.isDanger ? styles.danger : styles.normal}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

MoreDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isDanger: PropTypes.bool,
    })
  ),
};

export default MoreDropdown;

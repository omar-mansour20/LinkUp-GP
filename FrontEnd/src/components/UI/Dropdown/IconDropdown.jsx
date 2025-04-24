// import { useState, useRef, useEffect, useCallback } from "react";
// import styles from "./Dropdown.module.css";
// import Button from "../Button/Button";
// import { FiHeadphones } from "react-icons/fi";
// import { IoIosArrowDown, IoIosLink } from "react-icons/io";

// const IconDropdown = () => {
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
//       <Button onClick={() => setIsOpen(!isOpen)} icon={<FiHeadphones />}>
//         Huddle <IoIosArrowDown />
//       </Button>

//       {isOpen && (
//         <div className={styles.dropdownMenu}>
//           <p className={styles.normal}>
//             <FiHeadphones className={styles.dropdownIcons} />
//             Start Huddle
//           </p>
//           <p className={styles.normal}>
//             <IoIosLink className={styles.dropdownIcons} />
//             Join Huddle
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IconDropdown;

import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
import Button from "../Button/Button";
// import { IoIosArrowDown } from "react-icons/io";

const IconDropdown = ({ icon, label, items }) => {
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
      <Button onClick={() => setIsOpen(!isOpen)} icon={icon}>
        {label}
      </Button>

      {isOpen && (
        <div className={styles.iconDropdownMenu}>
          {items.map((item, index) => (
            <p
              key={index}
              className={styles.normal}
              onClick={item.onClick ? item.onClick : undefined}
            >
              {item.icon && (
                <span className={styles.dropdownIcons}>{item.icon}</span>
              )}
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

// ✅ إضافة PropTypes لمنع الأخطاء
IconDropdown.propTypes = {
  icon: PropTypes.node.isRequired, // أيقونة الزر الرئيسي لازم تكون عنصر React
  label: PropTypes.string.isRequired, // النص الرئيسي للزر لازم يكون string
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // كل عنصر لازم يكون فيه `label`
      icon: PropTypes.node, // الأيقونة اختيارية
      onClick: PropTypes.func, // onClick اختيارية
    })
  ).isRequired,
};

export default IconDropdown;

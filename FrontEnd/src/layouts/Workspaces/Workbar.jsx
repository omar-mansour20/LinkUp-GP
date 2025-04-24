import { useState, useEffect, useRef } from "react";
import styles from "./Workbar.module.css";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineMessage,
  AiFillMessage,
  AiOutlineBell,
  AiFillBell,
  AiOutlineClockCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { FaPlus, FaUser } from "react-icons/fa6";
import UserMenu from "./UserMenu/UserMenu";

const sidebarItems = [
  {
    label: "Home",
    iconOutline: <AiOutlineHome />,
    iconFill: <AiFillHome />,
  },
  {
    label: "DMs",
    iconOutline: <AiOutlineMessage />,
    iconFill: <AiFillMessage />,
  },
  {
    label: "Activity",
    iconOutline: <AiOutlineBell />,
    iconFill: <AiFillBell />,
  },
  {
    label: "Later",
    iconOutline: <AiOutlineClockCircle />,
    iconFill: <AiFillClockCircle />,
  },
  {
    label: "More",
    iconOutline: <IoIosMore />,
    iconFill: <IoIosMore />,
  },
];

function Workbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.work_bar}>
      {sidebarItems.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`${styles.iconWrapper} ${isActive ? styles.active : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.icon}>
              {isActive ? item.iconFill : item.iconOutline}
            </div>
            <span className={styles.label}>{item.label}</span>
          </div>
        );
      })}

      <div className={styles.bottomSection}>
        <div className={styles.iconButton}>
          <FaPlus />
        </div>

        <div className={styles.profileWrapper} ref={menuRef}>
          <div
            className={styles.profilePhotoPlaceholder}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <FaUser className={styles.photo} />
          </div>
          <span className={styles.statusDot}></span>

          {showUserMenu && <UserMenu />}
        </div>
      </div>
    </div>
  );
}

export default Workbar;

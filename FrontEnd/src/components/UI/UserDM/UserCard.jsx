// import { useNavigate } from "react-router-dom";
// import styles from "./UserDM.module.css";
// import { BiSolidUser } from "react-icons/bi";
// import Button from "../Button/Button";
// import style from "../Button/Button.module.css";

// const UserCard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.UserCard}>
//       <div className={styles.coverInfo}>
//         <BiSolidUser className={styles.cover} />
//         <div className={styles.info}>
//           <div className={styles.user}>
//             <span className={styles.name}>User</span>
//             <span className={styles.status}></span>
//           </div>
//           <span className={styles.job}>Backend Developer</span>
//           <span className={styles.gender}>• He/Him</span>
//         </div>
//       </div>
//       <span className={styles.description}>
//         This conversation is just between{" "}
//         <span className={styles.userMention}>@User</span> and you. Check out
//         their profile to learn more about them.
//       </span>

//       <Button onClick={() => navigate("/profile")} className={style.button}>
//         View profile
//       </Button>
//     </div>
//   );
// };

// export default UserCard;

import styles from "./UserDM.module.css";
import { BiSolidUser } from "react-icons/bi";
import Button from "../Button/Button";
import style from "../Button/Button.module.css";
import { useDispatch } from "react-redux";
import { openUserPanel } from "../../../API/redux_toolkit/ui/chatPanel";
const UserCard = () => {
  const dispatch = useDispatch();

  function handelOpenUserPanel() {
    dispatch(openUserPanel());
  }

  return (
    <div className={styles.UserCard}>
      <div className={styles.coverInfo}>
        <BiSolidUser className={styles.cover} onClick={handelOpenUserPanel} />
        <div className={styles.info}>
          <div className={styles.user} onClick={handelOpenUserPanel}>
            <span className={styles.name}>User</span>
            <span className={styles.status}></span>
          </div>
          <span className={styles.job}>Backend Developer</span>
          <span className={styles.gender}>• He/Him</span>
        </div>
      </div>
      <span className={styles.description}>
        This conversation is just between{" "}
        <span className={styles.userMention}>@User</span> and you. Check out
        their profile to learn more about them.
      </span>

      <Button onClick={handelOpenUserPanel} className={style.button}>
        View profile
      </Button>
    </div>
  );
};

export default UserCard;

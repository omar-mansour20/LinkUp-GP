// import { useState } from "react";
// import styles from "./about.module.css";
// import { FiUserPlus } from "react-icons/fi";
// import { IoTimeOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import EditTopic from "./EditTopic/EditTopic";

// const About = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className={styles.detailsContainer}>
//       <div className={styles.section1} onClick={() => setIsModalOpen(true)}>
//         <div className={styles.topicBar}>
//           <p className={styles.addTopic}>Topic</p>
//           <p className={styles.edit}>Edit</p>
//         </div>
//         <p className={styles.addButton}>Add a topic</p>
//       </div>

//       <div className={styles.section2}>
//         <div className={styles.subSection}>
//           <IoTimeOutline className={styles.icon} />
//           <p className={styles.time}>11:57 AM local time</p>
//         </div>
//         <div className={styles.subSection2}>
//           <MdOutlineEmail className={styles.icon} />
//           <p className={styles.mail}>user@gmail.com</p>
//         </div>
//         <p className={styles.viewProfile}>View full profile</p>
//       </div>

//       <div className={styles.section3}>
//         <FiUserPlus className={styles.icon} />
//         <p className={styles.p}>Add people to this conversation</p>
//       </div>

//       <EditTopic isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default About;

import { useState } from "react";
import styles from "./about.module.css";
import { FiUserPlus } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import EditTopic from "./EditTopic/EditTopic";
import AddPeopleModal from "./AddPeople/AddPeople";

const About = () => {
  const [isEditTopicOpen, setIsEditTopicOpen] = useState(false);
  const [isAddPeopleOpen, setIsAddPeopleOpen] = useState(false);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.section1} onClick={() => setIsEditTopicOpen(true)}>
        <div className={styles.topicBar}>
          <p className={styles.addTopic}>Topic</p>
          <p className={styles.edit}>Edit</p>
        </div>
        <p className={styles.addButton}>Add a topic</p>
      </div>

      <div className={styles.section2}>
        <div className={styles.subSection}>
          <IoTimeOutline className={styles.icon} />
          <p className={styles.time}>11:57 AM local time</p>
        </div>
        <div className={styles.subSection2}>
          <MdOutlineEmail className={styles.icon} />
          <p className={styles.mail}>user@gmail.com</p>
        </div>
        <p className={styles.viewProfile}>View full profile</p>
      </div>

      <div className={styles.section3} onClick={() => setIsAddPeopleOpen(true)}>
        <FiUserPlus className={styles.icon} />
        <p className={styles.p}>Add people to this conversation</p>
      </div>

      <EditTopic
        isOpen={isEditTopicOpen}
        onClose={() => setIsEditTopicOpen(false)}
      />
      <AddPeopleModal
        isOpen={isAddPeopleOpen}
        onClose={() => setIsAddPeopleOpen(false)}
      />
    </div>
  );
};

export default About;

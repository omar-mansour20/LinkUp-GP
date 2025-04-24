// import styles from "../UserProfile/UserProfile.module.css";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import UserNavbar from "../UserDM/Userbar";
import UserCard from "../UserDM/UserCard";
import InputField from "../InputField/InputField";

const UserDM = () => {
  return (
    <MainLayout>
      <UserNavbar />
      <UserCard />
      <InputField />
    </MainLayout>
  );
};

export default UserDM;

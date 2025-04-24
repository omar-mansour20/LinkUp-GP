import InputField from "../../components/UI/InputField/InputField";
import UserCard from "../../components/UI/UserDM/UserCard";
import UserNavbar from "../../components/UI/UserDM/Userbar";
import ContentPage from "./ContentPage/ContentPage";

function DmPage() {
  return (
    <ContentPage>
      <UserNavbar />
      <UserCard />
      <InputField />
    </ContentPage>
  );
}

export default DmPage;

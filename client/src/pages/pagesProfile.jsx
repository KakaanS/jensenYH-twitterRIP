import Trends from "../components/componentsTrends";
import Sidebar from "../components/componentsSidebar";
import ProfilePage from "../components/componentProfilePage";

const Profile = () => {
  return (
    <div>
      <Sidebar />

      <Trends />

      <ProfilePage username={"Simon"} />
    </div>
  );
};

export default Profile;

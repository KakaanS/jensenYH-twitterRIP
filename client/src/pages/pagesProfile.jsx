import Trends from "../components/componentsTrends";
import Sidebar from "../components/componentsSidebar";
import ProfilePage from "../components/componentProfilePage";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <ProfilePage />
      <Trends />
    </div>
  );
};

export default Profile;

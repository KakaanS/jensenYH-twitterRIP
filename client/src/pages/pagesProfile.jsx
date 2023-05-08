import Trends from "../components/componentsTrends";
import Sidebar from "../components/componentsSidebar";
import ProfilePage from "../components/componentProfilePage";
import "../css/ProfilepageGoran.css";

const Profile = () => {
  return (
    <div className="app">
      <div>
        <Sidebar />
        <Trends />
      </div>

      <ProfilePage />
    </div>
  );
};

export default Profile;

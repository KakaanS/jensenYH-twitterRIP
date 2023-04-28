import Sidebar from "../components/componentsSidebar";
import Feed from "../components/componentsFeed";
import Trends from "../components/componentsTrends";
import Logout from "../components/componentsLogout";
import "../css/main.css";

//<Trends />
const Home = () => {
  return (
    <div class="app">
      <Sidebar />
      <Feed />
      <Trends />
      <Logout />
    </div>
  );
};

export default Home;

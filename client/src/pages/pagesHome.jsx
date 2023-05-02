import Sidebar from "../components/componentsSidebar";
import HomeMiddle from "../components/componentsHomeMiddle";
import Trends from "../components/componentsTrends";
import Logout from "../components/componentsLogout";

import "../css/main.css";

const Home = () => {
  return (
    <div class="app">
      <Sidebar />
      <HomeMiddle />
      <Trends />
      <Logout />
    </div>
  );
};

export default Home;

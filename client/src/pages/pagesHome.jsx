import Sidebar from "../components/componentsSidebar";
import HomeMiddle from "../components/componentsHomeMiddle";
import Trends from "../components/componentsTrends";
import Logout from "../components/componentsLogout";

import { TrendsProvider } from "../context/TrendsContext";
import "../css/main.css";

const Home = () => {
  return (
    <div class="app">
      <Sidebar />
      <HomeMiddle />
      <TrendsProvider>
        <Trends />
      </TrendsProvider>
      <Logout />
    </div>
  );
};

export default Home;

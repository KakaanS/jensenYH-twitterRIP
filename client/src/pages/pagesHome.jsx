import Sidebar from "../components/componentsSidebar";
import HomeMiddle from "../components/componentsHomeMiddle";
import Trends from "../components/componentsTrends";

import "../css/main.css";

const Home = () => {
  return (
    <div className="app">
      <Sidebar />
      <HomeMiddle />
      <Trends />
    </div>
  );
};

export default Home;

import Sidebar from "../components/componentsSidebar";
import Feed from "../components/componentsFeed";
import Trends from "../components/componentsTrends";
import "../css/main.css"


const Home = () => {
  return (
    <div class="app">
     
      <Sidebar />
      <Feed />
      <Trends />
    </div>
  );
};

export default Home;

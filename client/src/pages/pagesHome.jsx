import Sidebar from "../components/componentsSidebar";
import Feed from "../components/componentsFeed";
/* import Trends from "../components/componentsTrends";
 */ import "../css/main.css";

//<Trends />
const Home = () => {
  return (
    <div class="app">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Home;

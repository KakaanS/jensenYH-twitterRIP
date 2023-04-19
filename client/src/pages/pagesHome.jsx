import NavSearchBar from "../components/componentsNavAndSearchBar";

import Feed from "../components/componentsFeed";
import Trends from "../components/componentsTrends";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavSearchBar />
      <Feed />
      <Trends />
    </div>
  );
};

export default Home;

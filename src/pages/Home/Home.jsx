import Navbar from "../../components/HomePage/Navbar/Navbar";
import backgroundVideo from '../../assets/videos/backgroundVideo.mp4'

import "./Home.scss";

const Home = () => {
  return (
    <div className="home_cont">
      <Navbar />
      <video src={backgroundVideo} autoPlay loop muted />;
    </div>
  );
};

export default Home;

import Navbar from "../../components/Navbar/Navbar";
import backgroundVideo from '../../videos/backgroundVideo.mp4';
import './Home.scss';

const Home = () => {
    return (
      <div className="home_cont">
        <Navbar />
        <video src={backgroundVideo} autoPlay loop muted />
      </div>
    );
}

export default Home;
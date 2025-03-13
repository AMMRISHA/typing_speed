import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faKeyboard, faClock } from "@fortawesome/free-solid-svg-icons";
import TypingPractice from "./TypingPractice";
import Typingtest from "./Typingtest";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


function Home()
{
return <>
  <div className="under-div">
  <div className="home-page-logo">
    <img src={logo} alt="Logo" className="navbar-img" />
  </div>
  <hr></hr>
  <p className="middle-heading">Test & Improve your Typing Speed </p>
  <hr></hr>
  <button className="start-button">
      <Link to="/TypingPractice" className="flex items-center gap-2 text-white">
        <FontAwesomeIcon icon={faPlay} />
        Start Typing Test
      </Link>
    </button>

      
  </div>
</>
}

export default Home;
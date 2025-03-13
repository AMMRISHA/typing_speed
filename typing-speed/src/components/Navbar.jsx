import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faKeyboard, faClock } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <div className="navbar bg-blue-600 p-4 text-white">
   
      <ul className="flex gap-6">
      <li className="logo-li"><img src={logo} alt="Logo" className="navbar-img" /></li>
        <li>
          <Link to="/" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/TypingPractice" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faKeyboard} /> Typing Practice
          </Link>
        </li>
        <li>
          <Link to="/Typingtest" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} /> Typing Test
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

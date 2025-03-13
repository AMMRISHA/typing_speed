import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faKeyboard, faClock } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <nav className="navbar bg-blue-600 p-4 text-white">
      <ul className="flex gap-6">
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
    </nav>
  );
}

export default Sidebar;

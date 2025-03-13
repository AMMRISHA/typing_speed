import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Typingtest from "./pages/Typingtest";
import TypingPractice from "./pages/TypingPractice";

 function App() {
  const testText = "The quick brown fox jumps over the lazy dog. This is a classic sentence used to test typing skills because it contains every letter of the alphabet. However, mastering typing requires more than just one sentence. It involves consistent practice, finger placement, and muscle memory. Touch typing is the ability to type without looking at the keyboard, improving both speed and accuracy. Many people rely on home row positioning, where fingers rest naturally on ASDF and JKL; keys. This technique allows typists to navigate the keyboard efficiently, reducing unnecessary movements.In today’s digital age, typing proficiency is essential for productivity. Whether you’re writing emails, coding, or chatting, speed matters. A faster typist can complete tasks more efficiently, leaving more time for creativity and problem-solving. Regular practice with structured exercises, like typing paragraphs or repeating difficult words, enhances muscle memory. Accuracy is equally important—mistyped words slow down progress. Many typing tests evaluate words per minute (WPM) and accuracy percentage to measure skill level."; // Sample Text
  return (
    <Router>
    <div className="container-div">
   
    <Navbar/>
     <div className="flex-box">
      {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TypingPractice" element={<TypingPractice text={testText} />} />
            <Route path="/Typingtest" element={<Typingtest text={testText} />} />
          </Routes>
        </div>

       
      </div>
      </div>
    </Router>
  );
}
export default App;
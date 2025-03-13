import { useState, useEffect } from "react";

function TypingTest({ text }) {
  const [userInput, setUserInput] = useState("");
  const [timeLimit, setTimeLimit] = useState(30); // Default 30s
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Start Timer when user starts typing
  const handleChange = (e) => {
    if (!isRunning) {
      setIsRunning(true);
      setTimeLeft(timeLimit);
    }
    setUserInput(e.target.value);
  };

  // Timer Logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      calculateResults();
    }
  }, [isRunning, timeLeft]);

  // Calculate WPM & Accuracy
  const calculateResults = () => {
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const minutes = timeLimit / 60;
    setWpm(Math.round(wordsTyped / minutes));

    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correctChars++;
    }
    setAccuracy(Math.round((correctChars / text.length) * 100));
  };

  // Restart Test
  const restartTest = () => {
    setUserInput("");
    setIsRunning(false);
    setTimeLeft(timeLimit);
    setWpm(0);
    setAccuracy(100);
  };

  return (
    <div className="typing-test-container">
   
   
    <div className="under-div">
      <h2 className="middle-heading">Typing Test</h2>

      {/* Time Limit Selection */}
      <div className="mb-4">
        <label className="mr-2 white">Set Time Limit:</label>
        <select
            value={timeLimit}
            onChange={(e) => {
              const newTime = Number(e.target.value);
              setTimeLimit(newTime);
              setTimeLeft(newTime); // 
            }}
            disabled={isRunning}
            className="bg-gray-700 p-2 rounded"
          >
            <option value={30}>30 sec</option>
            <option value={60}>1 min</option>
            <option value={120}>2 min</option>
          </select>
      </div>

      {/* Display Sample Text */}
      <p className="test-text">
        {text}
      </p>

      {/* Typing Area */}
      <textarea
        value={userInput}
        onChange={handleChange}
        disabled={!timeLeft}
        placeholder="Start typing here..."
        className="typing-input"
        rows="4"
      />

      {/* Timer Display */}
      <h3 className="mt-4 text-yellow-400 text-xl orange">Time Left: {timeLeft}s</h3>

      {/* Show Results when Time is Over */}
      {!isRunning && timeLeft === 0 && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Results:</h3>
          <p className="text-green-400">Accuracy: {accuracy}%</p>
          <p className="text-blue-400">Words Per Minute (WPM): {wpm}</p>
        </div>
      )}

      {/* Restart Button */}
      <button
        onClick={restartTest}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Restart Test
      </button>
    </div>
    </div>
  );
}

export default TypingTest;

import { useState } from "react";

function TypingPractice({ text }) {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Handle user input
  const handleChange = (e) => {
    if (!startTime) setStartTime(Date.now()); // Start timer on first keypress
    setUserInput(e.target.value);
  };

  // Calculate results
  const calculateResults = () => {
    if (!startTime) return; // If user hasn't typed, do nothing
    const timeTaken = (Date.now() - startTime) / 60000; // Convert ms to minutes

    // Calculate words per minute (WPM)
    const wordsTyped = userInput.split(/\s+/).length;
    setWpm(Math.round(wordsTyped / timeTaken));

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === userInput[i]) correctChars++;
    }
    setAccuracy(Math.round((correctChars / text.length) * 100));

    setIsCompleted(true); // Mark as completed
  };

  // Restart the test
  const restartTest = () => {
    setUserInput("");
    setStartTime(null);
    setAccuracy(null);
    setWpm(null);
    setIsCompleted(false);
  };

  return (
    <div className="typing-test-container">
      <h2 className="heading">Typing Test</h2>

      {/* Highlighted Text Display */}
      <p className="test-text">{text}</p>

      {/* Typing Area */}
      <textarea
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing here..."
        className="typing-input"
        disabled={isCompleted} // Disable input after submission
      />

      {/* Buttons */}
      {!isCompleted ? (
        <button onClick={calculateResults} className="submit-button">
          Submit
        </button>
      ) : (
        <button onClick={restartTest} className="restart-button">
          Restart
        </button>
      )}

      {/* Display Results after Submission */}
      {isCompleted && (
        <div className="results">
          <h3>Results:</h3>
          <p>Accuracy: {accuracy}%</p>
          <p>Words Per Minute (WPM): {wpm}</p>
        </div>
      )}
    </div>
  );
}

export default TypingPractice;

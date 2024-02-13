import './App.css';
import { useState } from 'react';
import image from "./Val-image.jpeg";
import tolulope from "./Tolulope.jpeg"
import Confetti from 'react-confetti';


const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleCardClick = () => {
    setShowMessage(true);

    // Start confetti after a delay
    setTimeout(() => {
      setConfetti(true);
    }, 50); // Adjust the delay as needed
  };

  return (
    <div className="app">
      {showMessage && confetti && <Confetti />}
      {showMessage ? (
        <div className="message-container">
          <h1>Happy Valentine's Day, Egbedoyin Tolulope Esther!</h1>
          <p>
          Through the highs and lows, your unwavering support and willingness to listen have been my pillars of strength. Your presence has been a source of comfort, and your love, a guiding light. I am blessed to have you as my partner, my confidante, and my best friend.

          As we celebrate another Valentine's Day together, let this message be a reminder of the immense love and gratitude I hold for you. You are not just my Valentine; you are my forever love, my anchor, and the melody that fills my heart with joy.

          Here's to many more years of love, laughter, and shared dreams. Happy Valentine's Day, my love.
          </p>

          <div className="card-container" onClick={handleCardClick}>
          <img
            className="jumping-card"
            src={tolulope} // Replace with the actual URL of your card image
            alt="Valentine's Card"
          />
        </div>
        </div>
        
      ) : (
        <div className="card-container" onClick={handleCardClick}>
          <img
            className="jumping-card"
            src={image} // Replace with the actual URL of your card image
            alt="Valentine's Card"
          />
          <p>
            Onitemi sends you a valentine card🥰. You are loved!
          </p>
          <p>Click to reveal</p>
        </div>
      )}
    </div>
  );
};

export default App;
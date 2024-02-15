import './App.css';
import { useState } from 'react';
import image from "./sorry-image.jpeg";
import mainImage from "./eunice.jpg"
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
          <h1>Eunice!</h1>
          <p>
            I'm sory I wasn't available, please and please, do well to forgive me 💓
          </p>

          <div className="card-container" onClick={handleCardClick}>
          <img
            className="jumping-card"
            src={mainImage} // Replace with the actual URL of your card image
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
            I'm sending you a sorry message🙏, I hope it's accepted🥰
          </p>
          <p>Click to reveal</p>
        </div>
      )}
    </div>
  );
};

export default App;
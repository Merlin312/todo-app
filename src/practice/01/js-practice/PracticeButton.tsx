import { useState } from 'react';
import './PracticeButton.css';

const PracticeButton = () => {
  const [bull, setBull] = useState(false);
  const handleClick = () => {
    setBull(!bull);
  };
  return (
    <div>
      {bull ? (
        <div>
          <button className="btn" onClick={handleClick}>
            "Clicked!"
          </button>
        </div>
      ) : (
        <div>
          <button className="btn" onClick={handleClick}>
            Click
          </button>
        </div>
      )}
    </div>
  );
};
export default PracticeButton;

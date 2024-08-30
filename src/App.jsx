import React, { useState, useEffect } from 'react';
import './App.css';
import solve from './Logic/Solve';
import { Button } from './Components';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false); 

  useEffect(() => {
    const existingHistory = JSON.parse(localStorage.getItem('History')) || [];
    setHistory(existingHistory);
  }, []);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => setInput('');

  const handleBackspace = () => setInput((prevInput) => prevInput.slice(0, -1));

  const handleCalculate = () => {
    try {
      const result = solve(input);

      const existingHistory = JSON.parse(localStorage.getItem('History')) || [];
      const newEntry = `${input} = ${result}`;
      existingHistory.push(newEntry);
      localStorage.setItem('History', JSON.stringify(existingHistory));

      setInput(result.toString());
      setHistory(existingHistory);
    } catch (error) {
      setInput('Error');
    }
  };

  const buttons = [
    { label: 'C', onClick: handleClear },
    { label: '←', onClick: handleBackspace },
    { label: '/', onClick: () => handleClick('/') },
    { label: '*', onClick: () => handleClick('*') },
    { label: '7', onClick: () => handleClick('7') },
    { label: '8', onClick: () => handleClick('8') },
    { label: '9', onClick: () => handleClick('9') },
    { label: '-', onClick: () => handleClick('-') },
    { label: '4', onClick: () => handleClick('4') },
    { label: '5', onClick: () => handleClick('5') },
    { label: '6', onClick: () => handleClick('6') },
    { label: '+', onClick: () => handleClick('+') },
    { label: '1', onClick: () => handleClick('1') },
    { label: '2', onClick: () => handleClick('2') },
    { label: '3', onClick: () => handleClick('3') },
    { label: '=', onClick: handleCalculate },
    { label: '0', onClick: () => handleClick('0'), className: 'zero' },
    { label: '.', onClick: () => handleClick('.') },
  ];

  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              className={button.className || ''}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <Button onClick={() => setShowHistory(!showHistory)} className="history-toggle">
          History
        </Button>
      </div>

      {showHistory && (
        <div className="history">
          <h2>History</h2>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './Spinner.css';

const command = ' cat homepage.html';

const Spinner = () => {
  const [displayed, setDisplayed] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setDisplayed(command.slice(0, index + 1));
    index++;

    if (index >= command.length) {
      clearInterval(interval);

      setTimeout(() => {
        setShowOutput(true);
        }, 500); // delay in milliseconds
      }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="page-loader">
      <div className="terminal-loader">

        <div className="line">
          <span className="prompt">guest@laira:~$ </span>
          <span>{displayed}</span>

          {!showOutput && <span className="cursor" />}
        </div>

        {showOutput && (
          <div className="line output">
            <span>&gt; Page loading ...</span>
          </div>

          <div className="line">
            <span className="prompt">guest@laira:~$ </span>
            <span className="cursor"></span>
          </div>
        )}

      </div>
    </div>
  );
};

export default Spinner;
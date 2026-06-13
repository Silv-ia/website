import React, { useEffect, useState } from 'react';
import './Spinner.css';

const command = 'cat homepage.html';

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
          <span className="cursor" />
        </div>

        {displayed.length === command.length && (
          <div className="line output">
            &gt; Page loading ...
          </div>
        )}
      </div>
    </div>
  );
};

export default Spinner;
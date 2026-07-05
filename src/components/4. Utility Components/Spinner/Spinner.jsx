import React, { useEffect, useState } from 'react';
import './Spinner.css';

const command = ' cat homepage.html';


const Spinner = () => {
  const [displayed, setDisplayed] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(command.slice(0, index + 1));
      index++;

      if (index >= command.length) {
        clearInterval(interval);

        // Show "Page loading..."
        setTimeout(() => {
          setShowLoading(true);

          // Show the next prompt 500 ms later
          setTimeout(() => {
            setShowPrompt(true);
          }, 500);

        }, 500);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="page-loader">
      <div className="terminal-loader">

        <div className="line">
          <span className="prompt">guest@laira:~$ </span>
          <span>{displayed}</span>

          {!showLoading && <span className="cursor" />}
        </div>

        {showLoading && (
          <div className="line output">
            <span>Page loading ...</span>
          </div>
        )}

        {showPrompt && (
          <div className="line">
            <span className="prompt">
              guest@laira:~$ <span className="cursor"></span>
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

export default Spinner;
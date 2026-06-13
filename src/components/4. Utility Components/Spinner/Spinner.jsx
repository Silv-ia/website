import React, { useEffect, useState } from 'react';
import './Spinner.css';

const text = 'guest@laira:~$ cat homepage.html';

const Spinner = () => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="page-loader">
      <div className="terminal-loader">
        <span>{displayed}</span>
        <span className="cursor"></span>
      </div>

      {displayed.length === command.length && (
        <div className="line output">
          &gt; Page loading ...
        </div>
      )}
    </div>
  );
};

export default Spinner;
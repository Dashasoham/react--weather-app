import React, { useState } from 'react';

export default function Degrees(props) {
  const [unit, setUnit] = useState('celsius');

  function convertF(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function convertC(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === 'celsius') {
    return (
      <div className="Degrees">
        <span className="degrees">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{' '}
          <a href="/" onClick={convertF}>
            F°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Degrees">
        {' '}
        <span className="degrees">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={convertC}>
            °C |{' '}
          </a>
          F°
        </span>
      </div>
    );
  }
}

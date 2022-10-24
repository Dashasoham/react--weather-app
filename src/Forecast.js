import React, { useState } from 'react';
import axios from 'axios';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [test, setTest] = useState(null);

  function handleForecast(response) {
    setLoaded(true);

    setTest(response.data);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="raw">
          <div className="col">Hi</div>
        </div>
      </div>
    );
  } else {
    let apiKey = '14c3a03f2d1f08f51dfob8945097tf22';
    let city = props.forecast.city;

    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(url).then(handleForecast);

    return 'Loading';
  }
}

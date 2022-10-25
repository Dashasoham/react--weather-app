import React, { useState } from 'react';
import ForecastDay from './ForecastDay';
import axios from 'axios';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="container">
        <div className="raw">
          <ForecastDay dailyData={forecastData[0]} />
        </div>
      </div>
    );
  } else {
    let apiKey = '14c3a03f2d1f08f51dfob8945097tf22';

    let city = props.forecast.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(url).then(handleForecast);

    return 'Loading';
  }
}

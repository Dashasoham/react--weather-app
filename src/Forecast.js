import React, { useState, useEffect } from 'react';
import ForecastDay from './ForecastDay';
import './Forecast.css';
import axios from 'axios';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.forecast.city]);

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast container">
        <div className="row">
          {forecastData.slice(1).map(function (dailyWeather, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <ForecastDay dailyData={dailyWeather} />
                </div>
              );
            } else {
              return null;
            }
          })}
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

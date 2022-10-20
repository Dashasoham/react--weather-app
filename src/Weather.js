import React, { useState } from 'react';
import './Weather.css';
import AppInfo from './AppInfo';
import axios from 'axios';

export default function Weather() {
  let [weather, setWeather] = useState(false);
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);

  function handleCity(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
    setMessage(city);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = '7d2f7439094688bc9a2723b3273f8711';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleCity);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className=" mt-4 pb-4" onSubmit={handleSubmit}>
      {' '}
      <div className="row">
        {' '}
        <div className="col-9">
          <input
            type="Search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />{' '}
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <AppInfo data={weather} />
      </div>
    );
  } else {
    return <h1 className="Weather">{form}</h1>;
  }
}

import React, { useState } from 'react';
import AppInfo from './AppInfo';
import Forecast from './Forecast';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
  let [weather, setWeather] = useState(false);
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(props.defaultCity);

  function handleCity(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.daily[0].temperature.day,
      description: response.data.daily[0].condition.description,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      date: new Date(response.data.daily[0].time * 1000),
      icon: response.data.daily[0].condition.icon_url,
      city: response.data.city,
      country: response.data.country,
      coordinates: response.data.coordinates,
    });
    console.log(response.data);
  }

  function search() {
    let apiKey = '14c3a03f2d1f08f51dfob8945097tf22';

    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
          <input type="submit" value="Search" className="btn  w-100" />{' '}
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
       
        {form}
        <AppInfo data={weather} />
        <Forecast forecast={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h1 className="Weather">{form}</h1>
      </div>
    );
  }
}

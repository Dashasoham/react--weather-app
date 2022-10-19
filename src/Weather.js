import React from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather() {
  return (
    <div className="Weather">
      <form className="m-4 pb-5">
        {' '}
        <div className="row">
          {' '}
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary w-100" />{' '}
          </div>
        </div>
      </form>

      <div className="container">
        <div class="row">
          <div class="col-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather-icon"
            />
          </div>
          <div class="col-2">
            {' '}
            <span className="degrees">18</span>
            <span className="units">°C</span>
          </div>
          <div class="col-3">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Humidity: 88%</li>
              <li>Wind: 24 km/h</li>
            </ul>
          </div>
          <div class="col-2"></div>
          <div class="col-3">
            <div>Wednesday,19</div>
            <div> Mostly cloudy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
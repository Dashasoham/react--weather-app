import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form-control">
        <input type="Search" />
        <input type="submit" className="btn btn-primary" />{' '}
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
            <span>°C</span>
          </div>
          <div class="col-2">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Humidity: 88%</li>
              <li>Wind: 24 km/h</li>
            </ul>
          </div>
          <div class="col-3"></div>
          <div class="col-3">
            <div>Wednesday,19</div>
            <div> Mostly cloudy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import CurrentDate from './CurrentDate';
import Degrees from './Degrees';

export default function AppInfo(props) {
  return (
    <div className="container">
      <h2 className="cityDisplay ">
        {props.data.city},<span className="country">{props.data.country}</span>
      </h2>
      <div className="currentDataRow row">
        <div className=" icon col-2 hello">
          {' '}
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-3 hello">
          {' '}
          <Degrees celsius={props.data.temperature} />
        </div>
        <div className="col-3 hello">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-1 hello"></div>
        <div className="col-3 hello">
          <div className="date">
            <CurrentDate />
          </div>
          <div className="description text-capitalize hola">
            {' '}
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import CurrentDate from './CurrentDate';
import Icon from './Icon';
import Degrees from './Degrees';

export default function AppInfo(props) {
  return (
    <div className="container">
      <h2 className="cityDisplay">{props.data.city}</h2>
      <div className="row">
        <div className=" icon col-2">
          <Icon code={props.data.icon} size={52} />
        </div>
        <div className="col-3">
          {' '}
          <Degrees celsius={props.data.temperature} />
        </div>
        <div className="col-3">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <div className="date">
            <CurrentDate date={props.data.date} />
          </div>
          <div className="description text-capitalize">
            {' '}
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.dailyData.temperature.maximum);
    return `${temp}`;
  }

  function minTemp() {
    let temp = Math.round(props.dailyData.temperature.minimum);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.dailyData.time * 1000);
    let day = date.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  return (
    <div>
      <div> {day()}</div>
      <img
        src={props.dailyData.condition.icon_url}
        alt={props.dailyData.condition.description}
      />

      <div>
        <span className="min">{maxTemp()}°</span>
        <span className="max">
          {'  '}
          {minTemp()}°
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import './Result.css';

const Result = (props) => {
    const { err, city, date, sunrise, sunset, temp, pressure, wind } = props.weather;
    let content = null;

    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <React.Fragment>
                <h3>Wyszukiwanie dla miasta <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temepratura: {temp} &#176;C</h4>
                <h4>Wschód słońca dzisiaj: {sunriseTime}</h4>
                <h4>Zachód słońca dzisiaj: {sunsetTime}</h4>
                <h4>Aktuala siła wiatru: {wind} m/s</h4>
                <h4>Aktualne cinienie: {pressure} hPa</h4>
            </React.Fragment>
        )
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    )
}

export default Result;
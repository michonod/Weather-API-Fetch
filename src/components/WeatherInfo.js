import React from "react";
import Card from "./Card";
import classes from "./WeatherInfo.module.css";

const WeatherInfo = ({ weatherData }) => {
  const temp = Math.floor(weatherData.main.temp - 273.15);
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const sunsetTime = new Date(
    weatherData.sys.sunset * 1000
  ).toLocaleTimeString();
  const sunriseTime = new Date(
    weatherData.sys.sunrise * 1000
  ).toLocaleTimeString();
  const windSpeed = (weatherData.wind.speed * 1.6).toFixed(2);
  return (
    <Card>
      <p className={classes.city}>{city}</p>
      <p>{country}</p>
      <h1 className={classes.temp}>
        {temp}
        <span className={classes.celsius}>&#x2103;</span>
      </h1>
      <p>{weatherData.weather[0].main}</p>
      <div className={classes.sun}>
        <p className={classes.sunset}>Sunset {sunsetTime}</p>
        <p className={classes.sunrise}>Sunrise {sunriseTime}</p>
      </div>
      <div className={classes.measure}>
        <p>Humidity {weatherData.main.humidity} %</p>
        <p>Wind {windSpeed} KPH</p>
        <p>Pressure {weatherData.main.pressure} hPa</p>
      </div>
    </Card>
  );
};

export default WeatherInfo;

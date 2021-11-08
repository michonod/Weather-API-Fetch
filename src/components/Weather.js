import axios from "axios";
import React, { Fragment, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import classes from "./Weather.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const key = `4d61899248f0d15068782030d7c1ff2a`;
  const fetchWeather = async () => {
    try {
      const response =
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}
`);
      setWeatherData(response.data);
      setIsValid(true);
      setCityNotFound(false);
    } catch (e) {
      console.log(e);
      setIsValid(false);
      setCityNotFound(true);
    }
  };
  console.log(weatherData);

  const submitFormHandler = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const inputChangeHandler = (e) => {
    setCity(e.target.value);
  };
  console.log(city);

  return (
    <Fragment>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <input type="text" onChange={inputChangeHandler} value={city} />
        <button type="submit">Search</button>
      </form>
      {isValid && <WeatherInfo weatherData={weatherData} />}
      {cityNotFound && <h1 className={classes.error}>City not found...</h1>}
    </Fragment>
  );
};

export default Weather;

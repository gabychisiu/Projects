import { WeatherWidget } from "../Weather/WeatherWidget";
import React from "react";
import "./styles.css";

export const WeatherPage = () => {
  return (
    <div className="weather-page">
      <h1>5-Day Forecast</h1>
      <WeatherWidget/>
    </div>
  );
};

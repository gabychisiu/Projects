import { WeatherWidget } from "../Weather/WeatherWidget";
import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";

export const WeatherPage = () => {
  return (
    <div className="weather-page page">
      <Typography variant="h3" component="div" gutterBottom>
        5-Day Forecast
      </Typography>
      <WeatherWidget />
    </div>
  );
};

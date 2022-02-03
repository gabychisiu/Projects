import { useEffect, useState } from "react";
import "./styles.css";
import { WeatherDay } from "../Weather/WeatherDay";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Home = () => {
  const weatherTemplate = {
    firstDay: {
      date: "",
      temp: 0,
      weather: {
        main: "",
        description: "",
      },
    },
    city: {
      name: "",
      country: "",
    },
  };

  const [forecast, setForecast] = useState(weatherTemplate);
  const [latPosition, setLatPosition] = useState(0);
  const [lonPosition, setLonPosition] = useState(0);

  const extractTime = (serverDateTime) => {
    // 2022-02-03 12:00:00 -> 12:00
    return serverDateTime.slice(11, 16);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatPosition(position.coords.latitude);
      setLonPosition(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const buildWeatherTemplate = (data) => {
      let weather = {
        time: extractTime(data.list[0].dt_txt),
        firstDay: {
          temp: data.list[0].main.temp,
          weather: {
            main: data.list[0].weather[0].main,
            description: data.list[0].weather[0].description,
          },
        },
        city: {
          name: data.city.name,
          country: data.city.country,
        },
      };
      return weather;
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latPosition}&lon=${lonPosition}&units=metric&appid=447a03def5288258910b4840619ff533`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(buildWeatherTemplate(data));
      });
  }, [latPosition, lonPosition]);

  return (
    <div className="weather-all">
      <div className="city-data">
        <h3>
          <FaMapMarkerAlt />
          {forecast.city.name}, {forecast.city.country}
        </h3>
      </div>
      <div className="weather">
        <WeatherDay
          dayNumber={0}
          apiWeather={forecast.firstDay}
          time={forecast.time}
        />
      </div>
    </div>
  );
};

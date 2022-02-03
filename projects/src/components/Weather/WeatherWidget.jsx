import { useEffect, useState } from "react";
import { AddCity } from "./AddCity";
import "./styles.css";
import { WeatherDay } from "./WeatherDay";

export const WeatherWidget = () => {
  const weatherTemplate = {
    firstDay: {
      temp: 293.55,
      weather: {
        main: "Rain",
        description: "light rain",
      },
    },
    secondDay: {
      temp: 293.55,
      weather: {
        main: "Rain",
        description: "light rain",
      },
    },
    thirdDay: {
      temp: 293.55,
      weather: {
        main: "Rain",
        description: "light rain",
      },
    },
    forthDay: {
      temp: 293.55,
      weather: {
        main: "Rain",
        description: "light rain",
      },
    },
    fifthDay: {
      temp: 293.55,
      weather: {
        main: "Rain",
        description: "light rain",
      },
    },
    city: {
      name: "London",
      country: "GB",
    },
  };

  const [forecast, setForecast] = useState(weatherTemplate);
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("Cluj-Napoca");

  const buildWeatherTemplate = (data) => {
    let weather = {
      firstDay: {
        temp: data.list[0].main.temp,
        weather: {
          main: data.list[0].weather[0].main,
          description: data.list[0].weather[0].description,
        },
      },
      secondDay: {
        temp: data.list[8].main.temp,
        weather: {
          main: data.list[8].weather[0].main,
          description: data.list[8].weather[0].description,
        },
      },
      thirdDay: {
        temp: data.list[16].main.temp,
        weather: {
          main: data.list[16].weather[0].main,
          description: data.list[16].weather[0].description,
        },
      },
      forthDay: {
        temp: data.list[24].main.temp,
        weather: {
          main: data.list[24].weather[0].main,
          description: data.list[24].weather[0].description,
        },
      },
      fifthDay: {
        temp: data.list[32].main.temp,
        weather: {
          main: data.list[32].weather[0].main,
          description: data.list[32].weather[0].description,
        },
      },
      city: {
        name: data.city.name,
        country: data.city.country,
      },
    };
    return weather;
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitCity = () => {
    setCity(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=447a03def5288258910b4840619ff533`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("date server: ", data);
        setForecast(buildWeatherTemplate(data));
      });
  }, [city]);

  return (
    <div className="weather-all">
      <div>
        <AddCity
          value={inputValue}
          onChange={onInputChange}
          onClick={onSubmitCity}
        />
        <p>
          {forecast.city.name}, {forecast.city.country}
        </p>
      </div>
      <div className="weather">
        <WeatherDay dayNumber={0} apiWeather={forecast.firstDay} />
        <WeatherDay dayNumber={1} apiWeather={forecast.secondDay} />
        <WeatherDay dayNumber={2} apiWeather={forecast.thirdDay} />
        <WeatherDay dayNumber={3} apiWeather={forecast.forthDay} />
        <WeatherDay dayNumber={4} apiWeather={forecast.fifthDay} />
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { AddCity } from "./AddCity";
import "./styles.css";
import { WeatherDay } from "./WeatherDay";

export const WeatherWidget = () => {
  const weatherTemplate = {
    firstDay: {
      date: "",
      temp: 0,
      weather: {
        main: "",
        description: "",
      },
    },
    secondDay: {
      date: "",
      temp: 0,
      weather: {
        main: "",
        description: "",
      },
    },
    thirdDay: {
      date: "",
      temp: 0,
      weather: {
        main: "",
        description: "",
      },
    },
    forthDay: {
      date: "",
      temp: 0,
      weather: {
        main: "",
        description: "",
      },
    },
    fifthDay: {
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
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("London");

  const extractTime = (serverDateTime) => {
    // 2022-02-03 12:00:00 -> 12:00
    return serverDateTime.slice(11, 16);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitCity = () => {
    setCity(inputValue);
    setInputValue("");
  };

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
      <div className="city-data">
        <AddCity
          value={inputValue}
          onChange={onInputChange}
          onClick={onSubmitCity}
        />
        <h3>
          {forecast.city.name}, {forecast.city.country}
        </h3>
      </div>
      <div className="weather">
        <WeatherDay
          dayNumber={0}
          apiWeather={forecast.firstDay}
          time={forecast.time}
        />
        <WeatherDay
          dayNumber={1}
          apiWeather={forecast.secondDay}
          time={forecast.time}
        />
        <WeatherDay
          dayNumber={2}
          apiWeather={forecast.thirdDay}
          time={forecast.time}
        />
        <WeatherDay
          dayNumber={3}
          apiWeather={forecast.forthDay}
          time={forecast.time}
        />
        <WeatherDay
          dayNumber={4}
          apiWeather={forecast.fifthDay}
          time={forecast.time}
        />
      </div>
    </div>
  );
};

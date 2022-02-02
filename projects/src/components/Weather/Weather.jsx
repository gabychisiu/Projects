import { useEffect, useState } from "react";

export const weatherTemplate = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1596564000,
        "main": {
          "temp": 293.55,
          "feels_like": 293.13,
          "temp_min": 293.55,
          "temp_max": 294.05,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 976,
          "humidity": 84,
          "temp_kf": -0.5
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 38
        },
        "wind": {
          "speed": 4.35,
          "deg": 309,
          "gust": 7.87
        },
        "visibility": 10000,
        "pop": 0.49,
        "rain": {
          "3h": 0.53
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-08-04 18:00:00"
      },
    ],
  "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
        "lat": 51.5073,
        "lon": -0.1277
      },
      "country": "GB",
      "timezone": 0,
      "sunrise": 1578384285,
      "sunset": 1578413272
    },
  }

export const WeatherWidget = () => {
  const [weatherToday, setWeatherToday] = useState(weatherTemplate);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Cluj-Napoca&units=metric&appid=447a03def5288258910b4840619ff533",
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
        setWeatherToday(data);
      });
  }, []);

  return (
    <div>
      <input type="text" name="city" id="" />
      <button>Click</button>
      <p>Yesterday</p>
      <p>Today {weatherToday.city.name} is: {weatherToday.list[0].main.temp}</p>
      <p>Tomorrow</p>
    </div>
  );
};

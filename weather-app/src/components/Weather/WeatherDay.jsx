import { FaCloud, FaCloudRain, FaRegSnowflake, FaSun } from "react-icons/fa";

export const WeatherDay = ({dayNumber, apiWeather, time}) => {
  const current = new Date();
  const date = `${current.getDay()}`;
  const month = `${current.getMonth()}`;
  const day = `${current.getDate()}`;

  const thisDay = (param2) => {
    switch (parseInt(day) + param2) {
      case 1:
        return parseInt(day) + param2 + "st";
      case 2:
        return parseInt(day) + param2 + "nd";
      case 3:
        return parseInt(day) + param2 + "rd";
      default:
        return parseInt(day) + param2 + "th";
    }
  };

  const thisMonth = () => {
    switch (parseInt(month)) {
      case 0:
        return "January ";
      case 1:
        return "February ";
      case 2:
        return "March ";
      case 3:
        return "April ";
      case 4:
        return "May ";
      case 5:
        return "June ";
      case 6:
        return "July ";
      case 7:
        return "August ";
      case 8:
        return "September ";
      case 9:
        return "October ";
      case 10:
        return "November ";
      default:
        return "December ";
    }
  };

  const today = (param) => {
    switch (parseInt(date) + param) {
      case 0:
        return "Sunday ";
      case 1:
        return "Monday ";
      case 2:
        return "Tuesday ";
      case 3:
        return "Wednesday ";
      case 4:
        return "Thursday ";
      case 5:
        return "Friday ";
      default:
        return "Saturday ";
    }
  };

  const iconChange = (iconDay) => {
    if (iconDay === "Snow") {
      return <FaRegSnowflake />;
    } else if (iconDay === "Clouds") {
      return <FaCloud />;
    } else if (iconDay === "Rain") {
      return <FaCloudRain />;
    } else {
      return <FaSun />;
    }
  };

  return (
    <div className="weather-day">
      <h3>{today(dayNumber)}</h3>
      <p>
        {thisMonth()}
        {thisDay(dayNumber)},
        {time}
      </p>
      <p>{iconChange(apiWeather.weather.main)}</p>
      <h3>{apiWeather.temp} °C</h3>
      <p>{apiWeather.weather.description}</p>
    </div>
  );
};

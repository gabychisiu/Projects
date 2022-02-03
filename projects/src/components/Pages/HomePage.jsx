import { Button } from "@mui/material";
import { Route } from "react-router-dom";
import { Home } from "../Home/Home";
import "./styles.css";

export const HomePage = () => {
  return (
    <div>
      <h1>The current weather in your location</h1>
      <Home />
      <Route
        render={({ history }) => (
          <Button
            type="button"
            onClick={() => {
              history.push("/weather");
            }}
          >
            Check the 5-Days Forecast
          </Button>
        )}
      />
    </div>
  );
};

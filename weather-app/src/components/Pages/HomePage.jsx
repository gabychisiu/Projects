import { Button, Typography } from "@mui/material";
import { Route } from "react-router-dom";
import { Home } from "../Home/Home";
import "./styles.css";

export const HomePage = () => {
  return (
    <div className="page">
      <Typography variant="h3" component="div" gutterBottom>
        The current weather in your location
      </Typography>
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

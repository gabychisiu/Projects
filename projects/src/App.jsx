import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/Pages/HomePage";
import { WeatherPage } from "./components/Pages/WeatherPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#004d40",
        light: "#346d63",
        dark: "#002f24",
      },
      secondary: {
        main: "#00698f",
        light: "#3489a6",
        dark: "#013f56",
      },
      background: {
        default: "#141414",
      },
      error: {
        main: "#ef4236",
      },
    },
    typography: {
      h3: {
        fontWeight: 200,
        fontSize: "1.3rem",
        lineHeight: 1.16,
        letterSpacing: "0.03em",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/weather">
              <WeatherPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

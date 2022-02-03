import "./styles.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu, bindHover } from "material-ui-popup-state";
import { NavLink, Route } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    {...bindHover(popupState)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>
                      <NavLink className="nav-link-btn" to="/home">
                        Weather now
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <NavLink className="nav-link-btn" to="/weather">
                        5-day forecast
                      </NavLink>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Route
                render={({ history }) => (
                  <Button
                    type="button"
                    sx={{
                      color: 'primary.contrastText',
                    }}
                    onClick={() => {
                      history.push("/home");
                    }}
                  >
                    Weather forecast
                  </Button>
                )}
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

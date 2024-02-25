import React, { FC } from "react";
import "./Header.css";
import HeaderInputTextField from "../HeaderInputTextField/HeaderInputTextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Header = () => {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  return (
    <header className="header" data-testid="Header">
      <div className="toggle">
        {/** using MUI to set togle switch between light and dark mode*/}
        <FormControlLabel
          control={<ToggleSwitch onChange={toggleTheme} />}
          label={isDarkMode ? "Light Mode" : "Dark Mode"}
        />
      </div>
      {/** Search Text and open Weather APi call*/}
      <HeaderInputTextField />
    </header>
  );
};

export default Header;

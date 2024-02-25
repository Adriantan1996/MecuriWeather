import React from "react";
import "./WeatherDisplayCard.css";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeContext } from "../../Provider/ThemeProvider";
import sun from "../../Images/sun.png";
import cloud from "../../Images/cloud.png";
import mist from "../../Images/mist.png";
import clear from "../../Images/clear.png";
import rain from "../../Images/rain.png";

const classes = {
  title: (isDarkMode: boolean) => ({
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    color: isDarkMode ? "#FFFFFF" : "#000000",
  }),
  temperature: (isDarkMode: boolean) => ({
    color: isDarkMode ? "#FFFFFF" : "#6C40B5",
    textAlign: "left",
    fontSize: "80px",
    fontWeight: 400,
  }),
  subDesciption: (isDarkMode: boolean) => ({
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    color: isDarkMode ? "#FFFFFF" : "#666666",
  }),
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleRow: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "10px",
    alignItems: "center",
  },
  image: {
    width: "300px",
    height: "300px",
    border: "1px",
  },
} as const;

export interface CardProps {
  objectId: number;
  country: string;
  weather: string;
  tempMax: number;
  tempMin: number;
  temperature: number;
  humidity: number;
  time: dayjs.Dayjs;
}

const WeatherDisplayCard: React.FC<CardProps> = ({
  objectId,
  country,
  weather,
  tempMax,
  tempMin,
  temperature,
  humidity,
  time,
}) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const renderImage = () => {
    let imgSrc = sun;
    switch (weather) {
      case "Mist":
        imgSrc = mist;
        break;
      case "Clouds":
        imgSrc = cloud;
        break;
      case "Clear":
        imgSrc = clear;
        break;
      case "Rain":
        imgSrc = rain;
        break;
      default:
        imgSrc = sun;
        break;
    }
    return (
      <img src={imgSrc} alt="Description of the image" style={classes.image} />
    );
  };
  return (
    <div className="card" data-testid="Card">
      <Box sx={classes.titleRow}>
        <Box>
          <Typography sx={classes.title(isDarkMode)}>
            Today's Weather
          </Typography>
          <Typography sx={classes.temperature(isDarkMode)}>
            {temperature}°
          </Typography>
        </Box>
        {renderImage()}
      </Box>
      <Typography sx={classes.title(isDarkMode)}>H:{tempMax}°</Typography>
      <Typography sx={classes.title(isDarkMode)}>L:{tempMin}°</Typography>
      <Box sx={classes.bottomRow}>
        <Typography sx={classes.subDesciption(isDarkMode)}>
          Country: {country}
        </Typography>
        <Typography sx={classes.subDesciption(isDarkMode)}>
          Time: {time.toString()}
        </Typography>
        <Typography sx={classes.subDesciption(isDarkMode)}>
          Humidity: {humidity}
        </Typography>
        <Typography sx={classes.subDesciption(isDarkMode)}>
          Weather: {weather}
        </Typography>
      </Box>
    </div>
  );
};

export default WeatherDisplayCard;

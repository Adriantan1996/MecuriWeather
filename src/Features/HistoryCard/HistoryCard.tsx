import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { ThemeContext } from "../../Provider/ThemeProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/store";
import retrieveWeatherReport from "../../utils/retrieveWeatherReport";
import { setState } from "../../Store/weatherSlice";
import getCountryCoordinates from "../../lib/api/getCountryCoordinates ";

export interface ListItem {
  id: number;
  country: string;
  time: dayjs.Dayjs;
}

const classes = {
  itemCard: (isDarkMode: boolean) => ({
    display: "flex",
    width: "550px",
    height: "78px",
    alignItems: "center",
    border: "5px",
    borderRadius: "5px",
    justifyContent: "space-between",
    padding: "0 10px",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
    color: isDarkMode ? "#FFFFFF" : "#000000",
  }),
  button: (isDarkMode: boolean) => ({
    borderRadius: "50%",
    border: "2px solid",
    borderColor: "black",
    width: "68px",
    height: "68px",
    color: isDarkMode ? "rgba(255, 255, 255, 0.4)" : "#000000",
  }),
  countryContainer: {
    width: "100px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
  },
} as const;

const HistoryCard: React.FC<ListItem> = ({ country, time }) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const store = useSelector(
    (state: RootState) => state.latestWeatherResults.latestResults
  );
  const dispatch = useDispatch();
  const handleSearchWeatherReport = async () => {
    const countryCoordinates = await getCountryCoordinates(country);

    if (!countryCoordinates.latitude || !countryCoordinates.longitude) {
      throw new Error(`Unable to find lat and lon of state country ${country}`);
    }
    retrieveWeatherReport(store, country, countryCoordinates, dispatch);
  };

  const handleDeleteWeather = async () => {
    const filterList = store.filter((item) => {
      return item.country !== country;
    });
    dispatch(setState(filterList));
  };

  const formattedTime = time.format("YYYY-MM-DD HH:mm:ss");

  return (
    <Box sx={classes.itemCard(isDarkMode)}>
      <div style={classes.countryContainer}>
        <Typography>{country}</Typography>
      </div>
      <Typography>{formattedTime}</Typography>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <Button
          sx={classes.button(isDarkMode)}
          onClick={handleSearchWeatherReport}
        >
          <SearchIcon />
        </Button>
        <Button sx={classes.button(isDarkMode)} onClick={handleDeleteWeather}>
          <DeleteIcon />
        </Button>
      </div>
    </Box>
  );
};
export default HistoryCard;

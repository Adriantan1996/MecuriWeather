import axios from "axios";
import { CountryCoordinatesType } from "./getCountryCoordinates ";

const getOpenWeather = async (coordinates: CountryCoordinatesType) => {
  const { latitude, longitude } = coordinates;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da2c3a856cc5d38fb1d664f541ec640e`;
  try {
    const reponse = await axios.get(endpoint);
    return reponse;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getOpenWeather;

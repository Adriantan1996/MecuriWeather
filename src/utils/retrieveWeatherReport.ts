import dayjs from "dayjs";
import appendResults from "../Features/HeaderInputTextField/utils/appendResults";
import fahrenheitToCelsius from "../Features/HeaderInputTextField/utils/fahrenheitToCelsius";
import { setState } from "../Store/weatherSlice";
import getCountryCoordinates, {
  CountryCoordinatesType,
} from "../lib/api/getCountryCoordinates ";
import getOpenWeather from "../lib/api/getOpenWeather";
import { CardProps } from "../Features/WeatherDisplayCard/WeatherDisplayCard";
import { Dispatch, UnknownAction } from "redux";

const retrieveWeatherReport = async (
  store: CardProps[] | undefined,
  country: string,
  countryCoordinates: CountryCoordinatesType,
  dispatch: Dispatch<UnknownAction>,
  setUserInput?: (value: React.SetStateAction<string>) => void
) => {
  // try catch block
  try {
    const weatherResults = await getOpenWeather(countryCoordinates);
    const results: CardProps = {
      objectId: 1,
      country: country,
      weather: weatherResults?.data.weather[0].main,
      tempMax: fahrenheitToCelsius(
        parseInt(weatherResults?.data.main.temp_max)
      ),
      tempMin: fahrenheitToCelsius(
        parseInt(weatherResults?.data.main.temp_min)
      ),
      temperature: fahrenheitToCelsius(
        parseInt(weatherResults?.data.main.temp)
      ),
      humidity: weatherResults?.data.main.humidity.toString(),
      time: dayjs(),
    };
    // append to redux store
    const updateResults = appendResults(store, results);
    dispatch(setState(updateResults));
    // reset userInput
    if (setUserInput) {
      setUserInput("");
    }
  } catch (error) {
    // throw error messages
    throw new Error("Unable to find information for this counrty");
  }
};

export default retrieveWeatherReport;

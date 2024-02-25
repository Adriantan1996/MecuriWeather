import React, { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import { ThemeContext } from "../../Provider/ThemeProvider";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import retrieveWeatherReport from "../../utils/retrieveWeatherReport";
import getCountryCoordinates from "../../lib/api/getCountryCoordinates ";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const HeaderInputTextField = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [userInputError, setUserInputError] = useState<boolean>(false);
  const { isDarkMode } = React.useContext(ThemeContext);
  const store = useSelector(
    (state: RootState) => state.latestWeatherResults.latestResults
  );
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // retreive use inputs
    setUserInput(event.target.value);
  };
  const onSubmitHandler = async () => {
    // retrieve weather report based on userInput and append to redux store
    // retireve lat and long from getCountryCoordinates
    const countryCoordinates = await getCountryCoordinates(userInput);

    if (!countryCoordinates.latitude || !countryCoordinates.longitude) {
      setUserInputError(true);
      setUserInput("");
      return;
    }
    setUserInputError(false);
    retrieveWeatherReport(
      store,
      userInput,
      countryCoordinates,
      dispatch,
      setUserInput
    );
  };
  return (
    <Box sx={{ display: "inline-block" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <input
          type="text"
          style={{
            width: "620px",
            height: "60px",
            borderRadius: "20px",
            paddingLeft: "20px",
            fontSize: "24px",
          }}
          placeholder="Key in A Country"
          value={userInput}
          onChange={handleChange}
        />
        <Button onClick={onSubmitHandler} isDarkMode={isDarkMode}>
          Button
        </Button>
      </Box>
      {userInputError && (
        <ErrorMessage
          message={"You have key in an invalid country, Please try again"}
        />
      )}
    </Box>
  );
};

export default HeaderInputTextField;

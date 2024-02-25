import React, { FC, ReactNode } from "react";
import "./Body.css";
import WeatherDisplayCard from "../WeatherDisplayCard/WeatherDisplayCard";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import dayjs from "dayjs";
import SearchHistory from "../SearchHistory/SearchHistory";

const Body = () => {
  let store = useSelector(
    (state: RootState) => state.latestWeatherResults.latestResults
  );
  if (store.length === 0) {
    store = [
      {
        objectId: 0,
        country: "",
        weather: "",
        tempMax: 0,
        tempMin: 0,
        temperature: 0,
        humidity: 0,
        time: dayjs(),
      },
    ];
  }
  const latestResults = store[store.length - 1];
  return (
    <div
      style={{
        display: "inline-block",
        width: "700px",
        height: "1000px",
        borderRadius: "40px",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
      data-testid="Body"
    >
      {/** WeatherDisplayCard display user current search*/}
      <WeatherDisplayCard
        country={latestResults.country}
        humidity={latestResults.humidity}
        objectId={latestResults.objectId}
        tempMax={latestResults.tempMax}
        tempMin={latestResults.tempMin}
        temperature={latestResults.temperature}
        time={latestResults.time}
        weather={latestResults.weather}
      />
      <SearchHistory />
    </div>
  );
};

export default Body;

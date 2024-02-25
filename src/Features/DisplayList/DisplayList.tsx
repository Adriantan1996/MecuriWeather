import React from "react";
import HistoryCard from "../HistoryCard/HistoryCard";
import { CardProps } from "../WeatherDisplayCard/WeatherDisplayCard";

interface ListProps {
  items: CardProps[];
}

const DisplayList: React.FC<ListProps> = ({ items }) => {
  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {items.map((item) => (
        <div key={item.country} style={{ marginBottom: "10px" }}>
          <HistoryCard
            key={item.objectId}
            id={item.objectId}
            country={item.country}
            time={item.time}
          ></HistoryCard>
        </div>
      ))}
    </div>
  );
};

export default DisplayList;

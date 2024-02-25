import DisplayList from "../DisplayList/DisplayList";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

const SearchHistory = () => {
  const store = useSelector(
    (state: RootState) => state.latestWeatherResults.latestResults
  );
  // retrieve search history from redux
  return (
    <div
      style={{
        display: "block",
        margin: "30px auto",
        border: "1px solid",
        borderRadius: "10px",
      }}
    >
      <p style={{ textAlign: "left", marginLeft: "20px" }}>Search History</p>
      <DisplayList items={store.slice().reverse()} />
    </div>
  );
};
export default SearchHistory;

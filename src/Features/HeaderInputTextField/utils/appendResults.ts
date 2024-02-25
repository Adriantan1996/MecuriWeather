import { CardProps } from "../../WeatherDisplayCard/WeatherDisplayCard";

const appendResults = (
  store: CardProps[] | undefined,
  newResults: CardProps
): CardProps[] => {
  if (!store) {
    const newObj = { ...newResults, objectId: 1 };
    return [newObj];
  }
  const filteredStoreObject = store.filter((object: CardProps) => {
    return object.country !== newResults.country;
  });
  const newObj = { ...newResults, objectId: store.length + 1 };
  const updatedStore = [...filteredStoreObject, newObj];
  return updatedStore;
};
export default appendResults;

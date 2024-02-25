import axios from "axios";

export type CountryCoordinatesType = {
  latitude: string | undefined;
  longitude: string | undefined;
};

const getCountryCoordinates = async (
  countryName: string
): Promise<CountryCoordinatesType> => {
  try {
    const encodedCountryName = encodeURIComponent(countryName);

    // Nominatim API retrieve lat and lon
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodedCountryName}`
    );

    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { latitude: lat, longitude: lon };
    } else {
      throw new Error("No results found for the given country.");
    }
  } catch (error) {
    console.error("Error fetching country coordinates:", error);
    return {
      latitude: undefined,
      longitude: undefined,
    };
  }
};

export default getCountryCoordinates;

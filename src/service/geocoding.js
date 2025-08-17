// service/geocoding.js
import api from "../../config/axios";

export const getCoordinatesFromAddress = async (address) => {
    try {
      const response = await api.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: address,
            format: "json",
          },
        }
      );
  
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lng: parseFloat(lon) };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

export const getAddressFromCoordinates = async (lat, lon) => {
  try {
    const response = await api.get("https://nominatim.openstreetmap.org/reverse", {
      params: {
        lat,
        lon,
        format: "json",
      },
    });
    if (response.data && response.data.display_name) {
      return response.data.display_name;
    } else {
      return "";
    }
  } catch (err) {
    console.error("Reverse geocoding error:", err);
    return "";
  }
};

import { useParams } from "react-router-dom";
import { getWeatherByCityName } from "../../api/getWeather";
import CityCard from "./../../components/CityCard/CityCard";

import { useState, useEffect } from "react";

export default function CityPage() {
  const { query } = useParams();
  const [city, setCity] = useState(null);
  useEffect(() => {
    getCityData();
  }, [query]);

  async function getCityData() {
    try {
      const data = await getWeatherByCityName(query);
      const newCity = {
        id: data.id,
        name: data.name,
        country: data.sys.country,
      };
      setCity({...newCity, data: data})
      
    } catch (error) {
      console.warn(error);
    }
  }
  function saveToFavorits() {
        const savedCities = JSON.parse(window.localStorage.cities);
        if (!savedCities.find((savedCity) => savedCity.id === city.id)) {
          savedCities.push({id: city.id, name: city.name, country: city.country,});
        }
        window.localStorage.cities = JSON.stringify(savedCities);
  }
  return (
    <>
      <h1>City Page</h1>
      <button onClick={saveToFavorits}>Save to favorits</button>
      <CityCard city={city}></CityCard>
    </>
  );
}

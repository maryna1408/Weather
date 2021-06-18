import { useParams, useHistory } from "react-router-dom";
import { getWeatherByCityName } from "../../api/getWeather";
import CityCard from "./../../components/CityCard/CityCard";

import { useState, useEffect } from "react";
import { useCities } from "../../hooks/useCities";

export default function CityPage() {
  const history = useHistory()
  const [cities, dispatchCities] = useCities();
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
      setCity({ ...newCity, data: data });
    } catch (error) {
      console.warn(error);
      history.replace(`/404`)
    }
  }
  function cityAction(type) {
    let savedCities = JSON.parse(window.localStorage.cities);
    if (type === 'save') {
      savedCities = [{ id: city.id, name: city.name, country: city.country }, ...savedCities];
      dispatchCities({ type: "ADD_CITY", payload: city });
    } else if (type === 'remove'){
      const cityIdx = cities.findIndex(savedCity => savedCity.id === city.id)
      savedCities.splice(cityIdx, 1)
      dispatchCities({ type: "REMOVE_CITY", payload: cityIdx });
    }
    window.localStorage.cities = JSON.stringify(savedCities);
  }

  return (
    <>
      <h1>City Page</h1>
      {city && (
        <>
          {cities.find(savedCity => savedCity.id === city.id) ? (
            <button onClick={() => cityAction('remove')}>Remove from favorits</button>
          ) : (
            <button onClick={() => cityAction('save')}>Save to favorits</button>
          )}
        </>
      )}
      <CityCard city={city}></CityCard>
    </>
  );
}

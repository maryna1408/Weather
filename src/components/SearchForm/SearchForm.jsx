import React, { useState } from "react";
import { getWeatherByCityName } from "../../api/getWeather";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  async function search(event) {
    event.preventDefault();
    console.log(query);
    try {
        const data = await getWeatherByCityName(query.trim());
        setQuery('')
        const newCity = {
            id: data.id,
            name: data.name,
            country: data.sys.country
        }
        const savedCities = JSON.parse(window.localStorage.cities)
        if (!savedCities.find(city => city.id === newCity.id)) {
            savedCities.push(newCity)
        }
        window.localStorage.cities = JSON.stringify(savedCities)
        console.log(data);
    } catch (error) {
        console.warn(error);
    }
  }
  return (
    <>
      <form onSubmit={search}>
        <input
          type="search"
          name="search"
          placeholder="Search city by name"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

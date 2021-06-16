import React, { useState } from "react";
import { getWeatherByCityName } from "../../api/getWeather";
import { useHistory } from "react-router-dom";
export default function SearchForm() {
  const history = useHistory() 
  const [query, setQuery] = useState("");
  async function search(event) {
    event.preventDefault();
    console.log(query);
    history.push(`/city/${query.trim()}`)
    setQuery('')
    
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

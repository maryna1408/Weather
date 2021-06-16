import './App.css';
import React, { useEffect } from 'react'
import SearchForm from './components/SearchForm/SearchForm';
import { useCities } from './hooks/useCities';
import CreateCityCard from './components/CityCard/CityCard';


function App() {
  const [cities] = useCities()

  useEffect(() => {
    console.log(cities);
  }, [cities])

  return (
    <>
    <SearchForm></SearchForm>
    <CreateCityCard></CreateCityCard>
    {/* {cities.map( city => <div key={city.id}>
              <h2>{city.name},{city.country}</h2>
              <h3>{city.data?.main.temp} C</h3>
              </div>)} */}
    </>
  );
}

export default App;

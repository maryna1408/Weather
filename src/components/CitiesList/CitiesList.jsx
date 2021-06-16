import { useEffect } from 'react'
import { useCities } from '../../hooks/useCities';
import CityCard from './../CityCard/CityCard';


export default function CitiesList() {
    const [cities] = useCities()

    useEffect(() => {
        console.log(cities);
      }, [cities])

    return (
        <>
            {cities.map(city => <CityCard city={city} key={city.id}></CityCard>)}
        </>
    )
}
import { useContext, useReducer, createContext, useEffect } from "react";
import { getWeatherById } from "../api/getWeather";


const initialState = []
export const CitiesContext = createContext()
export const useCities = () => useContext(CitiesContext)
const CitiesProvider = ({ children }) => {
    const [cities, dispatchCities] = useReducer(citiesReducer, initialState)

    useEffect(() => {
        if (!window.localStorage.cities) {
            window.localStorage.cities = JSON.stringify([])
        }
        const savedCities = JSON.parse(window.localStorage.cities)
        dispatchCities({ type: 'INIT_SET', payload: savedCities })
        savedCities.forEach(async (city) => {
            const data = await getWeatherById(city.id)
            dispatchCities({ type: 'ADD_CITY_WEATHER', payload: { id: city.id, data } })
        })

    }, [])

    function citiesReducer(state, action) {
        switch (action.type) {
            case 'INIT_SET':
                return action.payload
            case 'ADD_CITY_WEATHER': {
                const cities = [...state]
                const cityIdx = cities.findIndex(city => city.id === action.payload.id)
                const modifiedCity = { ...cities[cityIdx], data: action.payload.data }
                cities.splice(cityIdx, 1, modifiedCity)
                return cities
            }
            default:
                throw new Error('Incorrect action type!')
        }
    }
    return <CitiesContext.Provider value={[cities, dispatchCities]}>{children}</CitiesContext.Provider>
}
export default CitiesProvider;
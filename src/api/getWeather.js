import axios from "axios"

const API_KEY = 'ee540a7e7151e8dd4302dd9ee3f62523'

export async function getWeatherByCityName(cityname) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`).then(r => r.data)
}
export async function getWeatherById(cityid) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${API_KEY}&units=metric`).then(r => r.data)
}
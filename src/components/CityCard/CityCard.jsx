
// country: "IN"
// data:
// base: "stations"
// clouds:
// all: 75
// __proto__: Object
// cod: 200
// coord:
// lat: 28.6667
// lon: 77.2167
// __proto__: Object
// dt: 1623929136
// id: 1273294
// main:
// feels_like: 37.93
// humidity: 55
// pressure: 999
// temp: 33.05
// temp_max: 33.05
// temp_min: 33.05
// __proto__: Object
// name: "Delhi"
// sys:
// country: "IN"
// id: 9165
// sunrise: 1623887586
// sunset: 1623937859
// type: 1
// __proto__: Object
// timezone: 19800
// visibility: 4000
// weather: Array(1)
// 0:
// description: "haze"
// icon: "50d"
// id: 721
// main: "Haze"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// wind:
// deg: 90
// speed: 2.06
// __proto__: Object
// __proto__: Object
// id: 1273294
// name: "Delhi"



import styles from './CityCard.module.css'

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric'
})

export default function CityCard({city}) {
  return (
    <>{city && <div className={[styles.card].join(' ')}>
      <div className={[styles.main_content]}>
    <h2>
      {city.name}, {city.country}
    </h2>
    <h3 className={[styles.temp]}>{Math.round(city.data?.main.temp)}°</h3>
    <div className={[styles.max_min_temp]}>
    <div>max. {Math.round(city.data?.main.temp_max)}°</div>, 
    <div>min. {Math.round(city.data?.main.temp_min)}°</div>
    </div>
    </div>
    <div className={[styles.secondary_content]}>
      <div className={[styles.secondary_content_elem]}>Humidity <h4>{city.data?.main.humidity} %</h4></div>
      <div className={[styles.secondary_content_elem]}>Pressure <h4>{city.data?.main.pressure}</h4> </div>
      <div className={[styles.secondary_content_elem]}>Feels like <h4>{Math.round(city.data?.main.feels_like)}°</h4></div>
      <div className={[styles.secondary_content_elem]}>Visibility <h4>{city.data?.visibility} m</h4></div>
      <div className={[styles.secondary_content_elem]}>Wind direction <h4>{city.data?.wind.deg}°</h4></div>
      <div className={[styles.secondary_content_elem]}>Wind speed <h4>{city.data?.wind.speed}m/s</h4></div>
      <div className={[styles.secondary_content_elem]}>Sunrise <h4>{timeFormatter.format(city.data?.sys.sunrise)}</h4></div>
      <div className={[styles.secondary_content_elem]}>Sunset <h4>{timeFormatter.format(city.data?.sys.sunset)}</h4></div>
    </div>
  </div>}</>
  );
}

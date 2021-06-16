import styles from './CityCard.module.css'

export default function CityCard({city}) {
  return (
    <>{city && <div className={[styles.card, 'sdas', 'sadas'].join(' ')}>
    <h2>
      {city.name},{city.country}
    </h2>
    <h3>{city.data?.main.temp} C</h3>
  </div>}</>
  );
}

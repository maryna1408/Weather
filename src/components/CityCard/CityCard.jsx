          
          
          export default function CreateCityCard(){
              return city => <div key={city.id}>
              <h2>{city.name},{city.country}</h2>
              <h3>{city.data?.main.temp} C</h3>
              </div>
          }
          
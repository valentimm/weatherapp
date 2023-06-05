import axios from "axios";
import { useEffect, useState } from "react";
import { SmallCard, SmallCardProps } from "./components/SmallCard";
import { Container, MainTemperature, SecondaryInfo } from "./styles";
import storm from "/storm.svg";


export interface WeatherDataProps {
  lat: number;
  long: number;
  name: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    feels_like: number;
  };
}

export interface AirQualityProps {
  lat: number;
  long: number;
  list: {
    main: {
      aqi: number;
    };
  components: {
    co: number;
    o3: number;
    no2: number;
    so2: number;
    pm2_5: number;
    pm10: number;
  };
  };
}

  export function Principal() {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    const [weather, setWeather] = useState<WeatherDataProps | null>(null);
    const [airQuality, setAirQuality] = useState<AirQualityProps | null>(null);

    useEffect(() => {
      const getAirQuality = async ({ lat, long }: AirQualityProps) => {
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/air_pollution', {
            params: {
              lat: lat,
              lon: long,
              appid: apiKey,
            },
          });
          setAirQuality(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching air quality data:', error);
        }
      };
      const getWeather = async ({ lat, long }: WeatherDataProps) => {
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              lat: lat,
              lon: long,
              appid: apiKey,
              lang: 'pt',
              units: 'metric',
            },
          });
          const roundedTemp = Math.round(response.data.main.temp);
          const roundedTempMax = Math.round(response.data.main.temp_max);
          const roundedTempMin = Math.round(response.data.main.temp_min);
          const roundedFeelsLike = Math.round(response.data.main.feels_like);
          setWeather({
            ...response.data,
            main: {
              temp: roundedTemp,
              temp_max: roundedTempMax,
              temp_min: roundedTempMin,
              humidity: response.data.main.humidity,
              feels_like: roundedFeelsLike,
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      const handleLocation = (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        getWeather({
          lat: latitude,
          long: longitude,
          name: '',
          wind: {
            speed: 0,
          },
          main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            humidity: 0,
            feels_like: 0,
          },
        });
        getAirQuality({
          lat: latitude,
          long: longitude,
          list: {
            main: {
              aqi: 0,
            },
            components: {
              co: 0,
              o3: 0,
              no2: 0,
              so2: 0,
              pm2_5: 0,
              pm10: 0,
            },
          },
        });
      };

      navigator.geolocation.getCurrentPosition(handleLocation);

    }, [apiKey]);
  const roundedTemp = weather?.main.temp;
  const roundedTempMax = weather?.main.temp_max;
  const roundedTempMin = weather?.main.temp_min;
  const wind = weather?.wind.speed ? (weather.wind.speed * 3.6).toFixed(1) : undefined;
  const humidity = weather?.main.humidity;
  const roundedFeelsLike = weather?.main.feels_like;


  const smallCards: SmallCardProps[] = [
    { key: 1, title: "Vento", value: `${wind} km/h`, icon: "/wind.svg" },
    { key: 2, title: "Umidade", value: `${humidity}`, icon: "/drops.svg" },
    { key: 3, title: "Sensação", value: `${roundedFeelsLike} °C`, icon: "/rainPercentage.svg" },
  ];


  return (
    <Container>
      <MainTemperature>
        <div className="tempMain">
          <div className="headerMain">
            <img src={storm} alt="cloud" />
            <div className="location">
              <img src="/pin.svg" alt="location" />
              <p>{weather?.name}, RR</p>
              <p></p>  
            </div>
          </div>
          <div className="tempMainInfo">
            <div className="atualTemp">
              <h1>{roundedTemp}</h1>
              <p>°C</p>
            </div>
            <div className="minMaxTemp">
              <p className="maxTemp">{roundedTempMax}°</p>
              <p className="minTemp">{roundedTempMin}°</p>
            </div>
          </div>
          <div className="cardLine">
            {smallCards.map((card) => {
              return (
                <SmallCard 
                  key={card.key}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              );
            })}
          </div>
        </div>
      </MainTemperature>
      <SecondaryInfo>
        <div className="airQuality">
          <div className="airQualityHeader">
            <img src="/leaf.svg" alt="Leaf" />
            <h1>Qualidade do ar</h1>
          </div>
          <div className="airQualityInfo">
            <p>Bom</p>
            <h1>aaaaa</h1>
          </div>
        </div>
        <div className="sunTime">
          <div className="sunTimeHeader">
            <img src="/time.svg" alt="Sun Clock" />
            <h1>Horário do sol</h1>
          </div>
        
          
        </div>
      </SecondaryInfo>
    </Container>
  )
}
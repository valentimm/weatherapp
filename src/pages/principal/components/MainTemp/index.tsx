import axios from "axios";
import { useEffect, useState } from "react";
import { SmallCard, SmallCardProps } from "../SmallCard";
import { MainTemperature } from "./styles";
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

export function MainTempCard () {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    const [weather, setWeather] = useState<WeatherDataProps | null>(null);

    useEffect(() => {
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
          const roundedTempMin = Math.floor(response.data.main.temp_min);
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
      };
      navigator.geolocation.getCurrentPosition(handleLocation);
    }, [apiKey]);

    const roundedTemp = weather?.main.temp ?? 'N/A';
    const roundedTempMax = weather?.main.temp_max ?? 'N/A';
    const roundedTempMin = weather?.main.temp_min ?? 'N/A';
    const wind = weather?.wind.speed ? (weather.wind.speed * 3.6).toFixed(1) : 'N/A';
    const humidity = weather?.main.humidity ?? 'N/A';
    const roundedFeelsLike = weather?.main.feels_like ?? 'N/A';

    const smallCards: SmallCardProps[] = [
      { key: 1, title: "Vento", value: `${wind} km/h`, icon: "/wind.svg" },
      { key: 2, title: "Umidade", value: `${humidity} %`, icon: "/drops.svg" },
      { key: 3, title: "Sensação", value: `${roundedFeelsLike} °C`, icon: "/thermometer.svg" },
    ];

  return (
    <MainTemperature>
        <div className="tempMain">
          <div className="headerMain">
            <img src={storm} alt="cloud" />
            <div className="location">
              <img src="/pin.svg" alt="location" />
              <p>{weather?.name}, PR</p>
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
  )
}
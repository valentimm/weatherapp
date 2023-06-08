import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { SunInfos } from "./styles";

export interface SunProps {
  lat: number;
  long: number;
  sys: {
    sunrise: number;
    sunset: number;
  }
}

export function SunriseSunset (){
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const [sun, setSun] = useState<SunProps | null>(null);
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    
    const getSunriseSunset = async ({ lat, long }: SunProps) => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: lat,
            lon: long,
            appid: apiKey,
          },
        });
        setSun(response.data);
      } catch (error) {
        console.error('Error fetching sunrise and sunset data:', error);
      }
    };
    const handleLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      getSunriseSunset({
        lat: latitude,
        long: longitude,
        sys: {
          sunrise: 0,
          sunset: 0,
        }
      });
    };
    navigator.geolocation.getCurrentPosition(handleLocation);
  }, [apiKey]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const sunrise = sun ? new Date(sun.sys.sunrise * 1000).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'}) : '...';
  const sunset = sun ? new Date(sun.sys.sunset * 1000).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'}) : '...';

  return (
    <SunInfos>
      <div>
        <div className="sunHourHeader">
          <img src="/time.svg" alt="Leaf" />
          <h1>Horário do Sol</h1>
        </div>
        <div className="sunHourContent">
          <div className="graphic">
            <div className="sun"></div>
            <p>{currentTime.format('HH:mm')}</p>
            
          </div>
          <div className="sunHourInfos">
            <p>{sunrise}</p>
            <p>{sunset}</p>
          </div>
        </div>
      </div>
    </SunInfos>
  )
}
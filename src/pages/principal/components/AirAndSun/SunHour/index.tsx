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

  let indexSunPosition;


  if (sun && currentTime.isBetween(moment(sun.sys.sunrise * 1000).subtract(1, 'minute'), moment(sun.sys.sunrise * 1000))) {
    indexSunPosition = '6';
  } else if (currentTime.isBetween(moment('07:00', 'HH:mm'), moment('08:00', 'HH:mm'))) {
    indexSunPosition = '7';
  } else if (currentTime.isBetween(moment('08:00', 'HH:mm'), moment('09:00', 'HH:mm'))) {
    indexSunPosition = '8';
  } else if (currentTime.isBetween(moment('09:00', 'HH:mm'), moment('10:00', 'HH:mm'))) {
    indexSunPosition = '9';
  } else if (currentTime.isBetween(moment('10:00', 'HH:mm'), moment('11:00', 'HH:mm'))) {
    indexSunPosition = '10';
  } else if (currentTime.isBetween(moment('11:00', 'HH:mm'), moment('12:00', 'HH:mm'))) {
    indexSunPosition = '11';
  } else if (currentTime.isBetween(moment('12:00', 'HH:mm'), moment('13:00', 'HH:mm'))) {
    indexSunPosition = '12';
  } else if (currentTime.isBetween(moment('13:00', 'HH:mm'), moment('14:00', 'HH:mm'))) {
    indexSunPosition = '13';
  } else if (currentTime.isBetween(moment('14:00', 'HH:mm'), moment('15:00', 'HH:mm'))) {
    indexSunPosition = '14';
  } else if (currentTime.isBetween(moment('15:00', 'HH:mm'), moment('16:00', 'HH:mm'))) {
    indexSunPosition = '15';
  } else if (currentTime.isBetween(moment('16:00', 'HH:mm'), moment('17:00', 'HH:mm'))) {
    indexSunPosition = '16';
  } else if (currentTime.isBetween(moment('17:00', 'HH:mm'), sunset)) {
    indexSunPosition = '17';
  } else if (currentTime.isBetween(sunset, moment('23:59', 'HH:mm'))) {
    indexSunPosition = '18';
  } else {
    indexSunPosition = '6'; 
  }

  
  return (
    <SunInfos>
      <div>
        <div className="sunHourHeader">
          <img src="/time.svg" alt="Leaf" />
          <h1>Horário do Sol</h1>
        </div>
        <div className="sunHourContent">
          <div className="graphic">
          <div className={`sun sun-position-${indexSunPosition}`}></div>

            <div className="currentHour">
              <p>{currentTime.format('HH:mm')}</p>
            </div>
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
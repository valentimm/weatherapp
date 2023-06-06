import axios from "axios";
import { useEffect, useState } from "react";
import { AirInfos } from "./styles";

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
  }[];
}
export interface AirInfoProps {
  key: number;
  title: string;
  value: string;
  unit: string;
}

export function AirQuality (){
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
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
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };
    const handleLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      getAirQuality({
        lat: latitude,
        long: longitude,
        list: [
          {
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
        ],
      });
    };
    navigator.geolocation.getCurrentPosition(handleLocation);

  }, [apiKey]);
let indexAir;
let indexAirColor;

if (airQuality?.list[0]?.main?.aqi === 1) {
  indexAir = 'Ótima';
  indexAirColor = 'otima';
} else if (airQuality?.list[0]?.main?.aqi === 2) {
  indexAir = 'Boa';
  indexAirColor = 'boa';
} else if (airQuality?.list[0]?.main?.aqi === 3) {
  indexAir = 'Moderada';
  indexAirColor = 'moderada';
} else if (airQuality?.list[0]?.main?.aqi === 4) {
  indexAir = 'Ruim';
  indexAirColor = 'ruim';
} else if (airQuality?.list[0]?.main?.aqi === 5) {
  indexAir = 'Péssima';
  indexAirColor = 'pessima';
} else {
  indexAir = 'N/A';
}


const pm2_5 = airQuality?.list[0]?.components?.pm2_5;
const pm10 = airQuality?.list[0]?.components?.pm10;
const so2 = airQuality?.list[0]?.components?.so2;
const no2 = airQuality?.list[0]?.components?.no2;
const o3 = airQuality?.list[0]?.components?.o3;
const co = airQuality?.list[0]?.components?.co;

  const airData: AirInfoProps[] = [
  { key: 1, title: "PM2.5", value: `${pm2_5}`, unit: "μg/m3" },
  { key: 2, title: "PM10", value: `${pm10}`, unit: "μg/m3" },
  { key: 3, title: "SO₂", value: `${so2}`, unit: "μg/m3" },
  { key: 4, title: "NO₂", value: `${no2}`, unit: "μg/m3" },
  { key: 5, title: "O₃", value: `${o3}`, unit: "μg/m3" },
  { key: 6, title: "CO", value: `${co}`, unit: "μg/m3" },
];
  return (
    <AirInfos>
      <div>
          <div className="airQualityHeader">
            <img src="/leaf.svg" alt="Leaf" />
            <h1>Qualidade do ar</h1>
          </div>
          <div className="airQualityInfo">
            <p className={indexAirColor}>{indexAir}</p>
          </div>
          <div className="airQualityFooter">
            {airData.map((airInfo) => (
              <div className="infosContainer" key={airInfo.key}>
                <p>{airInfo.value}</p>
                <h2>{airInfo.title}</h2>
                <span>{airInfo.unit}</span>
              </div>
            ))}
          </div>
        </div>
    </AirInfos>
  )
}
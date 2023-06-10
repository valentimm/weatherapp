import axios from "axios";
import { useEffect, useState } from "react";
import { ForecastDay } from "./ForecastDay";
import { ForecastContainer } from "./styles";

interface MainProps {
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface ForecastItemProps {
  dt: number;
  main: MainProps;
  dt_txt: string;
}

export interface ForecastDataProps {
  lat: number;
  lon: number;
  dt: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  main: MainProps;
  dayOfWeek: string;
}

export function Forecast() {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const [forecasts, setForecasts] = useState<ForecastDataProps[]>([]);

  useEffect(() => {
    const getForecast = async ({ lat, lon }: ForecastDataProps) => {
      try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            lat: lat,
            lon: lon,
            appid: apiKey,
            lang: "pt",
            units: "metric",
          },
        });

        const noonForecasts: ForecastItemProps[] = response.data.list.filter(
          (forecastItem: ForecastItemProps) => {
            const dateTime = new Date(forecastItem.dt_txt);
            return dateTime.getHours() === 12;
          }
        );

        const formattedForecasts: ForecastDataProps[] = noonForecasts.map(
          (forecastItem: ForecastItemProps) => {
            const roundedTemp = Math.round(forecastItem.main.temp);
            const roundedTempMax = Math.round(forecastItem.main.temp_max);
            const roundedTempMin = Math.floor(forecastItem.main.temp_min);

            const date = new Date(forecastItem.dt * 1000);
            const dayOfWeek = date.toLocaleDateString("pt-BR", { weekday: "long" });

            return {
              lat: response.data.city.coord.lat,
              lon: response.data.city.coord.lon,
              dt: forecastItem.dt,
              temp: roundedTemp,
              temp_max: roundedTempMax,
              temp_min: roundedTempMin,
              main: {
                temp: roundedTemp,
                temp_max: roundedTempMax,
                temp_min: roundedTempMin,
              },
              dayOfWeek: dayOfWeek,
            };
          }
        );

        setForecasts(formattedForecasts);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    const handleLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      getForecast({
        lat: latitude,
        lon: longitude,
        dt: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        dayOfWeek: "",
        main: {
          temp: 0,
          temp_max: 0,
          temp_min: 0,
        },
      });
    };

    navigator.geolocation.getCurrentPosition(handleLocation);
  }, [apiKey]);

  console.log(forecasts);

  return (
    <ForecastContainer>
      {forecasts.map((forecast: ForecastDataProps) => (
        <ForecastDay
          key={forecast.dt}
          dt={forecast.dt}
          temp={forecast.temp}
          temp_max={forecast.temp_max}
          temp_min={forecast.temp_min}
          dayOfWeek={forecast.dayOfWeek}
        />
      ))}
    </ForecastContainer>
  );
}

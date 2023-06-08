import { AirQuality } from "./AirQuality";
import { SunriseSunset } from "./SunHour";
import { AirSun } from "./styles";

export function AirSunContainer (){
  return (
    <AirSun>
      <AirQuality />
      <SunriseSunset />
    </AirSun>
  )
}
import { ForecastDayContainer } from './styles';

export interface ForecastCardProps {
  key: number;
  dt: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  dayOfWeek: string;
}

export function ForecastDay({temp, temp_max, temp_min, dayOfWeek }: ForecastCardProps) {
  const formattedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1) ;
  const formattedDay = formattedDayOfWeek.replace('-feira', '')
  return (
    <ForecastDayContainer>
      <div>
        <h1>{formattedDay}</h1>
        <h2>{temp}º</h2>
        <div className="maxMin">
          <p>{temp_max}º</p>
          <p>{temp_min}º</p>
        </div>
      </div>
    </ForecastDayContainer>
  );
}

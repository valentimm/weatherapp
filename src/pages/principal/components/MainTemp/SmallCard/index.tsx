import { Card } from "./styles";

export interface SmallCardProps {
  key: number;
  title: string;
  value: string;
  icon: string;
}
export function SmallCard ({title, value, icon}: SmallCardProps) {
  return (
    <Card>
        <div className="smallCard">
          <h1>{title}</h1>
          <p>{value}</p>
          <img src={icon} alt={title}  />
        </div>
    </Card>      
  )
}
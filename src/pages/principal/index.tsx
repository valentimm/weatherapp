import { SmallCard, SmallCardProps } from "./components/SmallCard"
import { Container, MainTemperature, SecondaryInfo } from "./styles"
import storm from "/storm.svg"





export function Principal() {
  const smallCards: SmallCardProps[] = [
    { key: 1, title: "Vento", value: "15 km/h", icon: "/wind.svg" },
    { key: 2, title: "Umidade", value: "12 %", icon: "/drops.svg" },
    { key: 3, title: "Chuva", value: "10 %", icon: "/rainPercentage.svg" },
  ]
  return (
    <Container>
      <MainTemperature>
        <div className="tempMain">
          <div className="headerMain">
            <img src={storm} alt="cloud" />
            <div className="location">
              <img src="/pin.svg" alt="location" />
              <p>Pindamonhangaba, RR</p>
            </div>
          </div>
          <div className="tempMainInfo">
            <div className="atualTemp">
              <h1>30</h1>
              <p>°C</p>
            </div>
            <div className="minMaxTemp">
              <p className="maxTemp">22°</p>
              <p className="minTemp">15°</p>
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
            <h1>20</h1>
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
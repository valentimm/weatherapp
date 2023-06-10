import { AirSunContainer } from "./components/AirAndSun";
import { Forecast } from "./components/Forecast";
import { MainTempCard } from "./components/MainTemp";
import { Container } from "./styles";

export function Principal() {

  return (
    <Container>
      <MainTempCard />

        <AirSunContainer />
        <Forecast />

    </Container>
  )
}
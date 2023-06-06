import { AirSunContainer } from "./components/AirAndSun";
import { MainTempCard } from "./components/MainTemp";
import { Container } from "./styles";

export function Principal() {

  return (
    <Container>
      <MainTempCard />
      <AirSunContainer />
    </Container>
  )
}
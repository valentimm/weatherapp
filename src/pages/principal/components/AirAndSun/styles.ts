import styled from "styled-components";

export const AirSun = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 50rem;
  height: 15.25rem;
  gap: 1rem;
  margin: 17rem 0 0 2rem;

  @media (max-width: 768px) {
    height: 21rem;
    width: wrap;
    margin: 26rem 0 0 -22rem;
    grid-template-columns: 1fr;
  }
`

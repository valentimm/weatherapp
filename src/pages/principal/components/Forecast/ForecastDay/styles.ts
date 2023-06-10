import styled from "styled-components";

export const ForecastDayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.625rem;
  height: 8.25rem;  
  background-color: ${props => props.theme['purple-100']};
  opacity: 0.3;
  border-radius: 72% 28% 65% 35% / 30% 71% 29% 70%;
  margin-top: -1rem;
  h1 {
    margin: 0 0 0 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme['purple-200']};
  }
  h2 {
    margin: 0 0 0 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme['purple-100']};
  }
  .maxMin{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.5rem;
    p {
      font-size: 1.5rem;
      color: ${props => props.theme['purple-400']};
    }
  }
`;
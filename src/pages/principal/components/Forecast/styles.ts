import styled from "styled-components";

export const ForecastContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;

  width: 50rem;
  height: 12rem;
  margin: 35rem -50rem;
  padding: 2.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`
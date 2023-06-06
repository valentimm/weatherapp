import styled from "styled-components";
import background from '/background.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const SecondaryInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 50rem;
  height: 15.25rem;
  gap: 1rem;
  margin: 17rem 0 0 2rem;
  border: 1px solid ${props => props.theme['purple-700']};

  .airQuality {
    display: flex;
    background-color: rgba(36, 33, 77, 0.4);
    border-radius: 10px;
    padding: 1rem;
  }
  .airQualityHeader {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
    height: 1.75rem;
    padding: 0 4.5rem;
    border: 1px solid ${props => props.theme['purple-700']};
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${props => props.theme['purple-200']};
    }
  }
  .airQualityInfo {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 3.5rem;
      color: ${props => props.theme['purple-100']};
    }
    p {
      position: absolute;
      font-size: 2rem;
      font-weight: 700;
      color: ${props => props.theme['purple-100']};
        &.otima {
          color: ${props => props.theme['green-200']};
        }

        &.boa {
          color: ${props => props.theme['green-100']};
        }

        &.moderada {
          color: ${props => props.theme['yellow-300']};
        }

        &.ruim {
          color: ${props => props.theme['yellow-500']};
        }

        &.pessima {
          color: ${props => props.theme['red']};
        }
      }
}
`;
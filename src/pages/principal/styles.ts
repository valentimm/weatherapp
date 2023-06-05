import styled from "styled-components";
import background from '/background.svg';
import backgroundMain from '/backgroundMain.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const MainTemperature = styled.div`
  .tempMain {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(36, 33, 77, 0.4);
    background: url(${backgroundMain}) no-repeat center;
    background-size: cover;
    width: 30rem;
    height: 30rem;
    border-radius: 10px;
    margin: 17rem 0 0 16rem;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.25);
    padding-right: 1rem;
  }

  .headerMain {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    width: 30rem;
    height: 3.75rem;
    justify-content: space-between;
    padding: 1rem;
    img {
      margin: -5rem 0 0 -5rem;
      width: 11rem;
      height: 11rem;
    }
  }
  .location {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 12rem;
    height: 1.75rem;
    margin-top: 1rem;
    margin-right: -1.25rem;
    line-height: 160%;

    img {
      display: flex;
      color: ${props => props.theme['purple-500']};
      width: 1.75rem;
      height: 1.875rem;
      margin: -0.125rem 0 0 0;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${props => props.theme['purple-400']};
      margin: auto;
  }
}

  .tempMainInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .atualTemp {
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 0;
      }
      p {
        font-size: 1.5rem;
        font-weight: 600;
        width: 2rem;
        height: 2rem;
        color: ${props => props.theme['purple-200']};
        margin: -6rem 0 0 8rem;
      }
    }
    .minMaxTemp {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin: 4rem 0 0 0.75rem;
      p {
        font-size: 1.25rem;
        font-weight: 700;
      }
      .maxTemp {
        color: ${props => props.theme['white']};
      }
      .minTemp {
        color: ${props => props.theme['purple-200']};
      }
    }

  .cardLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    width: 28.5rem;
    height: 3.75rem;
    margin: 4rem 0 0 1rem;
  }
`;

export const SecondaryInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 50rem;
  height: 15.25rem;
  gap: 1rem;
  margin: 17rem 0 0 2rem;

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
  
  .sunTime {
    display: flex;
    background-color: rgba(36, 33, 77, 0.4);
    border-radius: 10px;
    padding: 1rem;
  }
  .sunTimeHeader {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
    height: 1.75rem;
    padding: 0 5rem;

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
  }
`;
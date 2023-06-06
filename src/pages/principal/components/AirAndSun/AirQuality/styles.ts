import styled from "styled-components";

export const AirInfos = styled.div`
    display: flex;
    background-color: rgba(36, 33, 77, 0.4);
    border-radius: 10px;
    padding: 1rem;
  
    .airQualityHeader {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 22rem;
      padding: 0 4rem;
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
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 40%;
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

    .airQualityFooter {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 22rem;
      height: 3rem;
      margin-top: 8rem;
    }
    .infosContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      p {
        font-size: 1rem;
        font-weight: 700;
        color: ${props => props.theme['green-100']};
      }
      h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme['purple-100']};
      }
      span {
        font-size: 0.65rem;
        color: ${props => props.theme['purple-100']};
      }
    }
`

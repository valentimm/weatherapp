import styled from "styled-components";

export const AirInfos = styled.div`
    display: flex;
    background-color: rgba(36, 33, 77, 0.6);
    border-radius: 10px;
    padding: 1rem;
    position: relative;

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
      
      p {
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme['purple-100']};
        position: relative;

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
      margin: 8rem 0 0 0;
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

    @media (max-width: 768px) {
      width: 23rem;
      height: 10rem;
      margin: 0 0 0 0.65rem;

      .airQualityHeader {
        width: 23rem;
        margin: -0.5rem 0 0 -1rem;
        padding: 0 5rem;
        h1 {
          font-size: 1.25rem;
        }
        img {
          width: 1.25rem;
          height: 1.25rem;
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
        p {
          font-size: 1.5rem;
          color: ${props => props.theme['purple-100']};
        }      
      }
      .airQualityFooter {
        margin: 4rem 0 0 -0.5rem;
      }
      .infosContainer {
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 0.8rem;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
`

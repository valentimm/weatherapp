import styled from "styled-components";
import backgroundMain from '/backgroundMain.svg';

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
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
    .magnifier{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.25rem 1rem 0 0;
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

  .PopoverTrigger{
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .PopoverContent{
    background: red;
  }

  @media (max-width: 768px) {
    .tempMain {
      width: 20rem;
      height: 20rem;
      margin: 4rem 0 0 2rem;
    }
    .headerMain {
      width: 20rem;
      height: 2.5rem; 
      img {
        margin: -4rem 0 0 -4rem;
        width: 8rem;
        height: 8rem;
      }
    }
    .location {
      width: 8rem;
      height: 1.25rem;
      margin: -0.5rem 0.75rem 0 0;
      line-height: 160%;
      justify-content: center;
      align-items: center;

      img {
        width: 1.25rem;
        height: 1.375rem;
        margin: -0.125rem 0 0 0;
      }
      p {
        font-size: 0.95rem;
        font-weight: 400;

      }
    }
    .tempMainInfo {

      margin: 2rem 0 0 0;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 4.75rem;
      }
      p {
        font-size: 1.25rem;
        margin-top: -4.5rem;
      }
    }
    .minMaxTemp {
      margin: 2rem 0 0 0.75rem;
      p {
        font-size: 1.25rem;
        margin: 1rem 0 0 0;
      }
    }
    .cardLine {
      width: 18.5rem;
      height: 8rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 1rem 0 0 1rem;

    }
  }
`;
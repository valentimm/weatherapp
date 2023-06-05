import styled from "styled-components";


export const Card = styled.div`
  .smallCard {
    display: flex;
    width: 9rem;
    height: 3.75rem;
    flex-direction: column;
    background-color: rgba(36, 33, 77, 0.4);
    border-radius: 10px;
    margin: 0 0 0 0;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.25);
    padding: 0.2rem 0 3rem 0.5rem;
  
  h1 {
    align-self: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${props => props.theme['purple-100']};
    margin: 0.3rem 0 0 0.5rem;
    padding: 0.2rem 0 0.2rem 0;

  }
  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme['purple-100']};
    margin: 0 0 0 3.5rem;
    padding: 0.2rem 0 0.2rem 0;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: left;
    margin: -2.5rem 0 0 0.5rem;
    color: ${props => props.theme['white']};
  }
}
`
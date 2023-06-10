import styled from "styled-components";
import background from '/background.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;

  .separator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border: 1px solid #fff;
    height: 15.25rem;
  }
`;

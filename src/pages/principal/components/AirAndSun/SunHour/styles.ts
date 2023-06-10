import styled from "styled-components";

export const SunInfos = styled.div`
  display: flex;
  background-color: rgba(36, 33, 77, 0.6);
  border-radius: 10px;
  padding: 1rem;
  .sunHourHeader {
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
  .sunHourContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85%;
    margin-top: 0.5rem;
  }
  .graphic{
    display: flex;
    height: 9rem;
    width: 18rem;
    margin-left: 2rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 150px 150px 0px 0px;
    border: 2px dashed #F6C833;
    border-bottom: 2px solid ${props => props.theme['yellow-700']};;
    p{
      font-size: 1.25rem;
      font-weight: 700;
      color: ${props => props.theme['white']};
    }
  }

  .sun {
    display: block;
    position: absolute;
    border: 4px solid ${props => props.theme['yellow-300']};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme['yellow-700']};
    transition: all 0.3s ease-in-out;
    
    &.sun-position-6 {
      margin: 9rem 18rem 0 0;
      z-index: 6;
    }
    &.sun-position-7 {
      margin: -0.75rem 15rem 0 0;
      z-index: 7;
    }
    &.sun-position-8 {
      margin: -4.2rem 12rem 0 0;
      z-index: 8;
    }
    &.sun-position-9 {
      margin: -6.5rem 9rem 0 0;
      z-index: 9;
    }
    &.sun-position-10 {
      margin: -7.9rem 6rem 0 0;
      z-index: 10;
    }
    &.sun-position-11 {
      margin: -8.65rem 3rem 0 0;
      z-index: 11;
    }
    &.sun-position-12 {
      margin: -9rem 0 0 0;
      z-index: 12;
    }
    &.sun-position-13 {
      margin: -8.65rem -3rem 0 0;
      z-index: 13;
    }
    &.sun-position-14 {
      margin: -7.9rem -6rem 0 0;
      z-index: 14;
    }
    &.sun-position-15 {
      margin: -6.5rem -9rem 0 0;
      z-index: 15;
    }
    &.sun-position-16 {
      margin: -4.2rem -12rem 0 0;
      z-index: 16;
    }
    &.sun-position-17 {
      margin: -0.75rem -15rem 0 0;
      z-index: 17;
    }
    &.sun-position-18 {
      margin: 9rem -18rem 0 0;
      z-index: 18;
    }
  }
  .sunHourInfos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2rem;
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    p{
      font-size: 1rem;
      font-weight: 700;
      color: ${props => props.theme['purple-100']};
    }
  }
`
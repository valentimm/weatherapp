import styled from "styled-components";

export const SunInfos = styled.div`
  display: flex;
  background-color: rgba(36, 33, 77, 0.4);
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
    height: 9.5rem;
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
    border: 1px solid ${props => props.theme['yellow-700']};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme['yellow-700']};
    &.sun-position-6 {
      margin-right: 18rem;
      margin-bottom: -9rem;
      z-index: 6;
    }
    &.sun-position-7 {
      margin-right: 17.5rem;
      margin-bottom: -9rem;
      margin-top: -4rem;
      z-index: 7;
    }
    &.sun-position-8 {
      margin-right: 16.5rem;
      margin-bottom: -9rem;
      margin-top: -7rem;
      z-index: 8;
    }
    &.sun-position-9 {
      margin-right: 15.25rem;
      margin-bottom: -9rem;
      margin-top: -10rem;
      z-index: 9;
    }
    &.sun-position-10 {
      margin-right: 13rem;
      margin-bottom: -9rem;
      margin-top: -13rem;
      z-index: 10;
    }
    &.sun-position-11 {
      margin-right: 9rem;
      margin-bottom: -9rem;
      margin-top: -16rem;
      z-index: 11;
    }
    &.sun-position-12 {
      margin-right: 0rem;
      margin-bottom: -9rem;
      margin-top: -18.5rem;
      z-index: 12;
    }
    &.sun-position-13 {
      margin-right: -9rem;
      margin-bottom: -9rem;
      margin-top: -16rem;
      z-index: 13;
    }
    &.sun-position-14 {
      margin-right: -13rem;
      margin-bottom: -9rem;
      margin-top: -13rem;
      z-index: 14;
    }
    &.sun-position-15 {
      margin-right: -15.25rem;
      margin-bottom: -9rem;
      margin-top: -10rem;
      z-index: 15;
    }
    &.sun-position-16 {
      margin-right: -16.5rem;
      margin-bottom: -9rem;
      margin-top: -7rem;
      z-index: 16;
    }
    &.sun-position-17 {
      margin-right: -17.5rem;
      margin-bottom: -9rem;
      margin-top: -4rem;
      z-index: 17;
    }
    &.sun-position-18 {
      margin-right: -18rem;
      margin-bottom: -9rem;
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
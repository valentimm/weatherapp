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
      margin: 0 1rem;
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
    .sun {
      display: flex;
      border: 1px solid ${props => props.theme['yellow-700']};
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: ${props => props.theme['yellow-700']};
    }
`

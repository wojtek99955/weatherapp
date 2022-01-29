import styled from 'styled-components';
import { BiWind } from "react-icons/bi";
import { SiRainmeter } from "react-icons/si";

export const Humidity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: start;
`;

export const Wind = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end;
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 5rem;
  align-items: center;
  margin-bottom: 6rem;

  h3 {
    font-size: 4rem;
    color: ${({ theme }) => theme.color.baseColor};
    justify-self: center;
  }
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.color.baseColor};
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;

export const Drops = styled(SiRainmeter)`
  color: ${({ theme }) => theme.color.baseColor};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const WindIcon = styled(BiWind)`
  color: ${({ theme }) => theme.color.baseColor};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
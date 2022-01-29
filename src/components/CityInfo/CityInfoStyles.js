import styled from 'styled-components';

export const CityName = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.color.baseColor};
  font-size: 2.5rem;
`;
export const WeatherDescription = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.color.baseColor};
  font-size: 1rem;
  margin-top: 0.6rem;
`;

import React, { useContext } from "react";
import CityInfo from "../CityInfo/CityInfo";
import MainSection from "../MainSection/MainSection";
import BottomSection from "../BottomSection/BottomSection";
import styled from "styled-components";
import ErrorMessage from "../Error/ErrorMessage";
import { WeatherCtx } from "../../App";
import MainImage from '../MainImage/MainImage';

const Container = styled.div`
  position: relative;
  z-index: 30;
`;

function WeatherInfo({ fetchError }) {

  const ctx = useContext(WeatherCtx)
  return (
    <>
      {ctx && !fetchError ? (
        <Container>
          <CityInfo />
          <MainImage />
          <MainSection />
          <BottomSection />
        </Container>
      ) : (
        <ErrorMessage fetchError={fetchError} />
      )}
    </>
  );
}

export default WeatherInfo;

import React, { useContext } from "react";
import { WeatherCtx } from "../../App";
import { Humidity, Wind, MainWrapper, Drops, WindIcon } from './MainSectionStyles'

function MainSection() {

  const ctx = useContext(WeatherCtx)

  return (
    <>
      <MainWrapper>
        <Humidity>
          <Drops />
          <h2>{ctx.main.humidity} %</h2>
        </Humidity>
        <h3>
          {Math.round(ctx.main.temp - 273)}
          <span>&#176;</span>
        </h3>
        <Wind>
          <WindIcon />
          <h2>{ctx.wind.speed} km/h</h2>
        </Wind>
      </MainWrapper>
    </>
  );
}

export default MainSection;

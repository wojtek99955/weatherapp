import React, { useContext } from "react";
import { WeatherCtx } from "../../App";
import { CityName, WeatherDescription } from './CityInfoStyles';

function CityInfo() {

  const ctx = useContext(WeatherCtx)

  return (
    <>
      <CityName>{ctx.name}</CityName>
      <WeatherDescription>{ctx.weather[0].main}</WeatherDescription>
    </>
  );
}

export default CityInfo;

import React, { useContext } from "react";
import { WeatherCtx } from "../../App";
import { MinMax, MinMaxItem } from './BottomSectionStyles';


function BottomSection() {

  const ctx = useContext(WeatherCtx);

  return (
    <>
      <MinMax>
        <MinMaxItem>
          <h3>
            {Math.round(ctx.main.temp_min - 273)}
            <span>&#176;</span>
          </h3>
          <p>Min</p>
        </MinMaxItem>
        <MinMaxItem>
          <h3>
            {Math.round(ctx.main.temp_min - 273)}
            <span>&#176;</span>
          </h3>
          <p>Max</p>
        </MinMaxItem>
        <MinMaxItem>
          <h3>
            {Math.round(ctx.main.feels_like - 273)}
            <span>&#176;</span>
          </h3>
          <p>Feel</p>
        </MinMaxItem>
      </MinMax>
    </>
  );
}

export default BottomSection;

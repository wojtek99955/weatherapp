import React, { useContext } from "react";
import { WeatherCtx } from "../../App";
import { Img } from './MainImageStyles';

function MainImage() {

    const ctx = useContext(WeatherCtx)

    return (
        <>
            <Img weather={ctx} />
        </>
    );
}

export default MainImage;
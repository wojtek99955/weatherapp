import React, { useContext } from 'react'
import styled from 'styled-components';
import { WeatherCtx } from '../../App';

const Container = styled.div`
    position: absolute;
    z-index: 50;
    top: 50%; 
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left:0;
    padding:1rem;
`

const StyledH2 = styled.h2`
    color: ${({ theme }) => theme.color.baseColor};
    font-size: 2.5rem;
    text-align: center;
`

function Start() {

    const ctx = useContext(WeatherCtx);

    return (
        <>
            {!ctx ? (
                <Container>
                    <StyledH2>
                        Weather in your city</StyledH2>
                </Container>
            ) :
                null
            }

        </>
    )
}

export default Start

import React from 'react';
import { CircularProgress } from "@mui/material";
import styled from 'styled-components';

const LoadingIcon = styled(CircularProgress)`
    position:relative;
    z-index:5;
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
`

function Loading() {
    return (
        <LoadingContainer>
            <LoadingIcon />
        </LoadingContainer>
    );
}

export default Loading
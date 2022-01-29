import React from "react";
import styled from "styled-components";

const Container = styled.main`
  max-width: 400px;
  min-height: 714px;
  margin: 5rem auto;
  background: radial-gradient(circle at top, #e9f4fb, #ffffff);
  -webkit-box-shadow: 0px 0px 24px -6px rgba(7, 12, 12, 0.85);
  -moz-box-shadow: 0px 0px 24px -6px rgba(7, 12, 12, 0.85);
  box-shadow: 0px 0px 24px -6px rgba(7, 12, 12, 0.85);
  position: relative;
  z-index: 1;
  

  &::before {
    content: "";
    width: 100%;
    height: 370px;
    background-color: white;
    position: absolute;
    z-index: 5;
    display: block;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }
`;

function AppContainer(props) {
  return <Container>{props.children}</Container>;
}

export default AppContainer;

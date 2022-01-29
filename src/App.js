import React, { useState, createContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyle } from "./GlobalStyles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import AppContainer from "./components/AppContainer";
import Search from "./components/Search/Search";
import { api } from "./ApiKey";
import Start from "./components/Start/Start";


const AppWrapper = styled.div`
  padding: 1.2rem;
`;

export const WeatherCtx = createContext({})

function App() {
  const [weather, setWeather] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const [fetchError, setFetchError] = useState(null);

  async function search(e) {
    if (e.key === "Enter") {
      try {
        const response = await fetch(
          `${api.base}/weather?q=${inputValue}&appid=${api.key}`
        );
        if (!response.ok) throw Error("City Not Found");
        const data = await response.json();
        setWeather(data);
        setFetchError(null);
        console.log(data);
      } catch (error) {
        setFetchError(error.message);
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <WeatherCtx.Provider value={weather}>
          <AppContainer>
            <AppWrapper>
              <Search inputOnChange={inputOnChange} search={search} />
              <Start />
              <WeatherInfo fetchError={fetchError} />
            </AppWrapper>
          </AppContainer>
        </WeatherCtx.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

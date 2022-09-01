import React from "react";
import Routes from "@routes";
import NavigationScroll from "@layout/NavigationScroll";
import { ThemeProvider } from "styled-components";
import theme from "@themes";

function App() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </>
  );
}

export default App;

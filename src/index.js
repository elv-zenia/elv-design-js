import React from "react";
import ReactDOM from "react-dom/client";
import "Assets/stylesheets/app.scss";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./static/themes/themes";
import {GlobalStyle} from "./static/themes";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
  </ThemeProvider>
);

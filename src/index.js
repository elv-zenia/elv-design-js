import React from "react";
import "Assets/stylesheets/app.scss";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./static/themes/themes";
import {GlobalStyle} from "./static/themes";
import {render} from "react-dom";

render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);

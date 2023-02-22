import React from "react";
import "./styles.css";
import {darkTheme, GlobalStyle, lightTheme} from "../src/static/themes";
import {ThemeProvider} from "styled-components";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Set the global theme for displaying components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"]
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: "alpha",
    expanded: true
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  backgrounds: {
    default: "light",
    values: [
      {name: "light", value: "#ffffff", default: true},
      {name: "dark", value: "#000000"}
    ]
  },
  layout: "padded",
};

export const decorators = [
  (Story, context) => {
    const {theme} = context.globals;

    React.useEffect(() => {
      document.documentElement.setAttribute('data-eluvio-theme', theme);
    }, [theme]);

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Story {...context} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
];

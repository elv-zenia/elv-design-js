import {addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {contexts} from "./contexts";
import React from "react";
import "./styles.css";
import {darkTheme, GlobalStyle, lightTheme} from "../src/static/themes";
import {ThemeProvider} from "styled-components";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Set the global theme for displaying components",
    defaultValue: "Light",
    toolbar: {
      icon: "paintbrush",
      items: ["Light", "Dark"]
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
    default: "Light",
    values: [
      {name: "Light", value: "#ffffff", default: true},
      {name: "Dark", value: "#000000"}
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
      <ThemeProvider theme={theme === "Light" ? lightTheme : darkTheme}>
        <Story {...context} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
];

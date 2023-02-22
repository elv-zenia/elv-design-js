import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "../src/static/themes";

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'light Theme', props: { theme:  lightTheme } },
      { name: 'dark Theme', props: { theme: darkTheme }, default: true },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    }
  }
];

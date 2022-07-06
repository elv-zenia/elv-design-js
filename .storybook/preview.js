import {addDecorator, addParameters} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {contexts} from "./contexts";
import {withA11y} from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// addParameters({
//   backgrounds: [
//     { name: "Light theme", value: "#ffffff", default: true },
//     { name: "Dark theme", value: "#050449" }
//   ]
// })

addDecorator(withA11y);
addDecorator(withContexts(contexts));

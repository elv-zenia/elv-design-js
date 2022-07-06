import React from "react";
import CopyIcon from "../../static/icons/copy.svg";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger"
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: "primary",
  icon: CopyIcon,
  iconOnly: true
};

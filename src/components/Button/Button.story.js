import React from "react";
import CopyIcon from "../../static/icons/copy.svg";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "icon"],
      control: {type: "select"}
    },
    children: {
      control: false
    },
    icon: {
      control: false
    },
  }
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

import React from "react";
import {CopyIcon} from "../../static/icons/Icons";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "icon", "ghost"],
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

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost"
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: "primary",
  icon: CopyIcon,
  iconOnly: true
};

export const TextIconButton = Template.bind({});
TextIconButton.args = {
  variant: "primary",
  icon: CopyIcon,
};

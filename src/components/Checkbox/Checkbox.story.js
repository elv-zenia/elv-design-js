import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox
};

const Template = (args) => <Checkbox {...args}>Checkbox</Checkbox>;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox label"
};

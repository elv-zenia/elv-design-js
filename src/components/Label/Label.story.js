import React from "react";
import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label
};

const Template = (args) => <Label {...args}></Label>;

export const Default = Template.bind({});
Default.args = {
  label: "First Name"
};

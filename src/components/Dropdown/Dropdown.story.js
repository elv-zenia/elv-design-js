import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown
};

const Template = (args) => <Dropdown {...args}></Dropdown>;

export const Default = Template.bind({});
Default.args = {
  label: "Menu Items",
  items: [
    {label: "Option 1", value: "1"},
    {label: "Option 2 - a disabled item", value: "2", disabled: true},
    {label: "Option 3", value: "3"},
    {label: "Option 4", value: "4"},
    {label: "Option 5", value: "5"},
    {label: "Option 6", value: "6"}
  ]
};

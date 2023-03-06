import React from "react";
import ToggleGroup from "./ToggleGroup";

export default {
  title: "Components/Toggle Group",
  component: ToggleGroup
};

const Template = (args) => <ToggleGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "YES",
  items: [{label: "Yes", value: "YES"}, {label: "No", value: "NO"}]
};

import React from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip
};

const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."
};

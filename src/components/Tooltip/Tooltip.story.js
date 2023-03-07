import React from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip
};

const containerStyle = {
  width: "50%",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Template = (args) => <div style={containerStyle}><Tooltip {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  label: "This is some tooltip text."
};

import React from "react";
import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search
};

const Template = (args) => <div style={{width: "50%"}}><Search {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search"
};

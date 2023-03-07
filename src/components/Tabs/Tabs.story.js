import React from "react";
import Tabs from "./Tabs";
import Button from "../Button";

export default {
  title: "Components/Tabs",
  component: Tabs
};

const Template = (args) => <div style={{width: "50%"}}><Tabs {...args} /></div>;

const TabOne = (
  <div>Tab content</div>
);

const TabTwo = (
  <div>
    More content
    <div>
      <Button style={{marginTop: "10px"}}>Example Button</Button>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "ONE",
  items: [
    {label: "Tab One", value: "ONE", content: TabOne},
    {label: "Tab Two", value: "TWO", content: TabTwo},
    {label: "Tab with an especially long title", value: "THREE", content: TabOne},
    {label: "Tab Four - disabled", value: "FOUR", disabled: true}
  ]
};

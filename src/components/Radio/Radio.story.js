import React from "react";
import {RadioGroup} from "./Radio";

export default {
  title: "Components/Radio Group",
  component: RadioGroup
};

const Template = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "item-1",
  items: [
    {
      label: "Radio Item 1",
      value: "item-1"
    },
    {
      label: "Radio Item 2",
      value: "item-2"
    },
    {
      label: "Radio Item 3 - disabled",
      value: "item-3",
      disabled: true
    }
  ]
};

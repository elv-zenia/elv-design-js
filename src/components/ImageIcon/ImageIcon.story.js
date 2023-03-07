import React from "react";
import ImageIcon from "./ImageIcon";
import {CopyIcon} from "../../static/icons/Icons";

export default {
  title: "Components/Icon",
  component: ImageIcon
};

const Template = (args) => <ImageIcon {...args}></ImageIcon>;

export const Default = Template.bind({});
Default.args = {
  icon: CopyIcon,
  title: "Copy icon"
};

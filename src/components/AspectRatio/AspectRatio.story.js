import React from "react";
import AspectRatio from "./AspectRatio";
import AspectImage from "../../static/images/aspect-image.jpg";

export default {
  title: "Components/AspectRatio",
  component: AspectRatio
};

const Template = (args) => <AspectRatio {...args}></AspectRatio>;

export const Default = Template.bind({});
Default.args = {
  title: "Test",
  image: AspectImage
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  image: AspectImage,
  width: 600
};

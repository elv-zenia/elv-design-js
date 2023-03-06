import React from "react";
import AspectRatio from "./AspectRatio";
import AspectImage from "../../static/images/aspect-image.jpg";

export default {
  title: "Components/Aspect Ratio",
  component: AspectRatio
};

const Template = (args) => <AspectRatio {...args}></AspectRatio>;

export const Default = Template.bind({});
Default.args = {
  alt: "Default aspect ratio",
  image: AspectImage
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  alt: "Custom width aspect ratio",
  image: AspectImage,
  width: 750
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  alt: "Thumbnail aspect ratio",
  image: AspectImage,
  ratio: 1,
  width: 70,
  borderRadius: 0
};

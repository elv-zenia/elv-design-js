import React from "react";
import Avatar from "./Avatar";
import ProfileImage from "../../static/images/profile-image.jpg";

export default {
  title: "Components/Avatar",
  component: Avatar
};

const Template = (args) => <Avatar {...args}></Avatar>;

export const Image = Template.bind({});
Image.args = {
  image: ProfileImage,
  alt: "Jane Nguyen"
};

export const Fallback = Template.bind({});
Fallback.args = {
  text: "JN"
};

import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
  title: "Components/Modal",
  component: Modal
};

const Template = (args) => <Modal {...args}></Modal>;

export const Default = Template.bind({});
Default.args = {
  trigger: <Button>Open a Modal</Button>,
  title: "Modal Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula leo, gravida hendrerit urna at, congue finibus neque. Quisque bibendum tempus purus. Praesent venenatis orci eget lorem ultricies accumsan. Pellentesque eu ultricies neque. Pellentesque et posuere nisi. Aenean lobortis tincidunt nisl sed venenatis. Nulla facilisi. Nam aliquam tempus dolor, non luctus mauris fringilla et."
};

export const Danger = Template.bind({});
Danger.args = {
  trigger: <Button variant="danger">Delete</Button>,
  danger: true,
  title: "Are you sure?",
  description: "This action cannot be undone.",
  confirmText: "Delete"
};

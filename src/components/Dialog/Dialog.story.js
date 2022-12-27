import React from "react";
import Dialog from "./Dialog";
import Button from "../Button/Button";

export default {
  title: "Components/Dialog",
  component: Dialog
};

const Template = (args) => <Dialog {...args}></Dialog>;

export const Default = Template.bind({});
Default.args = {
  trigger: <Button>Open a Dialog</Button>,
  title: "Dialog Title",
  description: "This is a dialog"
};

export const Danger = Template.bind({});
Danger.args = {
  trigger: <Button variant="danger">Delete</Button>,
  danger: true,
  title: "Are you sure?",
  description: "This action cannot be undone.",
  confirmText: "Delete"
};

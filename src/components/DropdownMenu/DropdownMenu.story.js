import React from "react";
import DropdownMenu from "./DropdownMenu";
import {MenuIcon} from "../../static/icons/Icons";
import Button from "../Button";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu
};

const Template = (args) => <DropdownMenu {...args}></DropdownMenu>;

export const IconButton = Template.bind({});
IconButton.args = {
  items: [
    {label: "Menu Item 1"},
    {label: "Menu Item 2"},
    {label: "Menu Item 3 - disabled", disabled: true},
    {label: "Menu Item 4"}
  ],
  trigger: <Button icon={MenuIcon} iconOnly={true} />
};

export const TextButton = Template.bind({});
TextButton.args = {
  items: [
    {label: "Menu Item 1"},
    {label: "Menu Item 2"},
    {label: "Menu Item 3"}
  ],
  trigger: <Button>Open Menu</Button>
};

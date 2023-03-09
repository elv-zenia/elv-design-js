import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

const loremIpsum = (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ex id ligula tempus cursus vitae sed justo. Integer ex dolor, cursus in ipsum quis, commodo pellentesque turpis. Sed et purus quis lacus rhoncus dignissim. Pellentesque nec augue quis ante gravida auctor. Aliquam a maximus dolor, eget iaculis odio. Nullam malesuada laoreet dolor vitae gravida. Sed ligula diam, rhoncus a nunc et, fermentum volutpat velit.</p>
);

Default.args = {
  collapsible: true,
  items: [
    {title: "Item 1", content: loremIpsum, value: "item1"},
    {title: "Item 2", content: loremIpsum, value: "item2"},
    {title: "Item 3", content: loremIpsum, value: "item3"},
    {title: "Item 4 - disabled", content: loremIpsum, value: "item4", disabled: true}
  ],
  type: "single"
};

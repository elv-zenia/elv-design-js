import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import styled from "styled-components";
import PropTypes from "prop-types";
import {PlusIcon} from "../../static/icons/Icons";
import AccordionItem from "./AccordionItem";

const Accordion = ({
  items=[],
  type="single",
  value,
  defaultValue,
  onValueChange,
  collapsible=false,
  orientation="vertical",
  disabled,
  ...rest
}) => {
  return (
    <StyledAccordionRoot
      type={type}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      collapsible={type === "single" ? collapsible : undefined}
      orientation={orientation}
      disabled={disabled}
      {...rest}
    >
      {
        items.map(item => (
          <AccordionItem
            key={item.value}
            icon={PlusIcon}
            value={item.value}
            title={item.title}
            disabled={item.disabled}
          >
            { item.content }
          </AccordionItem>
        ))
      }
    </StyledAccordionRoot>
  );
};

const StyledAccordionRoot = styled(AccordionPrimitive.Root)`
  border-radius: 6px;
  width: 100%;
`;

Accordion.propTypes = {
  /**
   * Accordion items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })),

  /**
   * Determines whether one or multiple items can be opened at
   * the same time.
   */
  type: PropTypes.oneOf(["single", "multiple"]),

  /**
   * The controlled value of the item to expand.
   */
  value: PropTypes.string,

  /**
   * The value of the item to expand when initially rendered.
   */
  defaultValue: PropTypes.string,

  /**
   * Event handler called when the expanded state of an item
   * changes.
   */
  onValueChange: PropTypes.func,

  /**
   * When type is "single", allows closing content when
   * clicking trigger for an open item.
   */
  collapsible: PropTypes.bool,

  /**
   * The orientation of the accordion.
   */
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),

  /**
   * When true, prevents the user from interacting with the
   * accordion and all of its items.
   */
  disabled: PropTypes.bool
};

export default Accordion;

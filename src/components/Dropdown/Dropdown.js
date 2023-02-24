import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import styled from "styled-components";
import {CheckIcon, ChevronDownIcon} from "@radix-ui/react-icons";
import PropTypes from "prop-types";

const Dropdown = ({items=[], placeholder="Select an option", className=""}) => {
  const SelectRoot = SelectPrimitive.Root;
  const SelectTrigger = StyledTrigger;
  const SelectIcon = SelectPrimitive.SelectIcon;
  const SelectPortal = SelectPrimitive.Portal;
  const SelectContent = StyledContent;
  const SelectViewport = StyledViewport;
  const SelectValue = SelectPrimitive.Value;
  const SelectItem = StyledItem;
  const SelectItemText = SelectPrimitive.ItemText;
  const SelectItemIndicator = SelectPrimitive.ItemIndicator;

  return (
    <SelectRoot className={className}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            {
              items.map(({label, value, disabled}) => (
                <SelectItem
                  value={value}
                  disabled={disabled}
                  key={`dropdown-item-${value}`}
                >
                  <SelectItemText>{ label }</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              ))
            }
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};

const StyledTrigger = styled(SelectPrimitive.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  box-shadow: 0 2px 5px lightgray;
  
  &:hover {
    background-color: whitesmoke;
  }
  
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

const StyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 5px;
`;

const StyledItem = styled(SelectPrimitive.Item)`
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 35px 0 25px;
  font-size: 14px;
  position: relative;
  user-select: none;
  
  &[data-disabled] {
    color: lightgray;
    pointer-events: none;
  }
  
  &[data-highlighted] {
    outline: none;
    background-color: steelblue;
    color: white;
  }
`;

Dropdown.propTypes = {
  /**
   * Dropdown items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
  })).isRequired,

  /**
   * Placeholder text to display when no value has been selected.
   */
  placeholder: PropTypes.string,

  /**
   * An optional className to be added.
   */
  className: PropTypes.string
};

export default Dropdown;

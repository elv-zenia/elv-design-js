import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import styled from "styled-components";
import {CheckIcon, ChevronDownIcon} from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import {menuContent, menuItem} from "../shared-styles";

const Dropdown = ({label, items=[], placeholder="Select an option", className=""}) => {
  const SelectRoot = SelectPrimitive.Root;
  const SelectTrigger = StyledTrigger;
  const SelectIcon = SelectPrimitive.SelectIcon;
  const SelectPortal = SelectPrimitive.Portal;
  const SelectContent = StyledContent;
  const SelectViewport = StyledViewport;
  const SelectValue = SelectPrimitive.Value;
  const SelectItem = StyledItem;
  const SelectItemText = SelectPrimitive.ItemText;

  return (
    <SelectRoot className={className}>
      <SelectTrigger>
        { label && <TriggerLabel>{label}</TriggerLabel> }
        <TriggerTextIconFlex>
          <SelectValue placeholder={placeholder} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </TriggerTextIconFlex>
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
                  <StyledItemIndicator>
                    <CheckIcon />
                  </StyledItemIndicator>
                  <SelectItemText>{ label }</SelectItemText>
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
  display: flex;
  border: ${({theme}) => `1px solid ${theme.dropdownBorder}`};
  border-radius: 7px;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1;
  min-height: 50px;
  
  &:hover {
    background-color: whitesmoke;
  }
  
  &:focus {
    box-shadow: ${({theme}) => `0 0 0 2px ${theme.dropdownFocus}`};
  }
`;

const TriggerLabel = styled.div`
  display: flex;
  flex-basis: 100%;
  font-size: 10px;
  font-weight: 400;
  padding-bottom: 0.25rem;
  line-height: 0.5rem;
  color: ${({theme}) => theme.dropdownLabel};
`;

const TriggerTextIconFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-basis: 100%;
`;

const StyledContent = styled(SelectPrimitive.Content)`
  padding: 5px 0;
  ${menuContent}
`;

const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 5px 0;
`;

const StyledItem = styled(SelectPrimitive.Item)`
  position: relative;
  user-select: none;
  ${menuItem}
`;

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

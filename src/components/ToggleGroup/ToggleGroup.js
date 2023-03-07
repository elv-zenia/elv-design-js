import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleGroup = ({
  items=[],
  type="single",
  value,
  onValueChange,
  defaultValue,
  orientation="vertical",
  ...rest
}) => {
  return (
    <StyledToggleGroupRoot
      type={type}
      value={value}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      orientation={orientation}
      {...rest}
    >
      {
        items.map(({label, value, disabled}) => (
          <StyledToggleGroupItem value={value} disabled={disabled}>{ label }</StyledToggleGroupItem>
        ))
      }
    </StyledToggleGroupRoot>
  );
};

const StyledToggleGroupRoot = styled(ToggleGroupPrimitive.Root)`
  display: inline-flex;
  gap: 0.5rem;
`;

const StyledToggleGroupItem = styled(ToggleGroupPrimitive.Item)`
  background-color: ${({theme}) => theme.toggleGroupBg};
  border: ${({theme}) => `1px solid ${theme.toggleGroupBorder}`};
  color: ${({theme}) => theme.textPrimaryColor};
  height: 2.5rem;
  min-width: 3.75rem;
  
  &[data-state=on] {
    border: ${({theme}) => `1px solid ${theme.toggleGroupSelectedBorder}`};
    color: ${({theme}) => theme.toggleGroupSelectedTextColor}
  }
`;

ToggleGroup.propTypes = {
  /**
   * Toggle Group items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
  })),

  /**
   * Determines whether a single or multiple items can be
   * pressed at a time.
   */
  type: PropTypes.oneOf(["single", "multiple"]),

  /**
   * The controlled value of the pressed item when `type`
   * is "single". Must be used with onValueChange.
   */
  value: PropTypes.string,

  /**
   * Event handler called when the pressed state of an item
   * changes and `type` is "single".
   */
  onValueChange: PropTypes.func,

  /**
   * The value(s) of the item(s) to show as pressed when
   * initially rendered.
   */
  defaultValue: PropTypes.string,

  /**
   * The orientation of the toggle group items.
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"])
};

export default ToggleGroup;

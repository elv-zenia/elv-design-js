import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tabs = ({
  defaultValue,
  items=[],
  ...rest
}) => {
  if(!defaultValue) {
    defaultValue = items[0].value;
  }

  return (
    <StyledTabsRoot defaultValue={defaultValue} {...rest}>
      <StyledTabsList>
        {
          items.map(({value, label, disabled}) => (
            <StyledTabsTrigger
              key={`tab-${value}`}
              value={value}
              disabled={disabled}
              title={label}
            >
              { label }
            </StyledTabsTrigger>
          ))
        }
      </StyledTabsList>
      {
        items.map(item => (
          <StyledTabsContent key={`content-${item.value}`} value={item.value}>{ item.content }</StyledTabsContent>
        ))
      }
    </StyledTabsRoot>
  );
};

const StyledTabsRoot = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const StyledTabsList = styled(TabsPrimitive.List)`
  display: flex;
  flex-shrink: 0;
  gap: 5px;
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
  background-color: transparent;
  flex: 1;
  height: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: ${({theme}) => theme.tabTextColor};
  
  &[data-state="active"] {
    border-bottom: ${({theme}) => `5px solid ${theme.tabSelectedBorder}`};
    color: ${({theme}) => theme.textPrimaryColor};
    font-weight: 700;
  }
  
  &[data-disabled] {
    color: ${({theme}) => theme.textDisabled};
    pointer-events: none;
  }
`;

const StyledTabsContent = styled(TabsPrimitive.Content)`
  outline: none;
  padding: 1.25rem;
`;

Tabs.propTypes = {
  /**
   * The value of the tab that should be active when initially
   * rendered.
   */
  defaultValue: PropTypes.string,

  /**
   * Tab items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
    disabled: PropTypes.bool
  }))
};

export default Tabs;

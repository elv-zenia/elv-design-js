import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import PropTypes from "prop-types";
import {menuContent, menuItem} from "../shared-styles";

const DropdownMenu = ({open, onOpenChange, trigger, items=[], ...rest}) => {
  const DropdownMenuRoot = DropdownMenuPrimitive.Root;
  const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
  const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

  return (
    <DropdownMenuRoot open={open} onOpenChange={onOpenChange} {...rest}>
      <DropdownMenuTrigger asChild>{ trigger }</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <StyledDropdownMenuContent>
          {items.map(item => (
            <StyledDropdownMenuItem key={`dropdown-menu-item-${item.label}`} disabled={item.disabled}>{ item.label }</StyledDropdownMenuItem>
          ))}
        </StyledDropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
};

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
  padding: 10px 0;
  z-index: auto;
  ${menuContent}
`;

const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
  ${menuItem}
`;

DropdownMenu.propTypes = {
  /**
   * The controlled open state of the dropdown menu. Must be used with onOpenChange.
   */
  open: PropTypes.bool,

  /**
   * Event handler called when the open state of the dropdown menu changes.
   */
  onOpenChange: PropTypes.func,

  /**
   * The button that opens the menu.
   */
  trigger: PropTypes.object,

  /**
   * Dropdown menu items.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    disabled: PropTypes.bool
  }))
};

export default DropdownMenu;

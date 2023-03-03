import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import PropTypes from "prop-types";
import {menuContent, menuItem} from "../shared-styles";

const DropdownMenu = ({open, onOpenChange, trigger, items=[], className=""}) => {
  const DropdownMenuRoot = DropdownMenuPrimitive.Root;
  const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
  const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

  return (
    <DropdownMenuRoot open={open} onOpenChange={onOpenChange} className={className}>
      <DropdownMenuTrigger asChild>{ trigger }</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <StyledDropdownMenuContent>
          {items.map(({label, disabled}) => (
            <StyledDropdownMenuItem key={`dropdown-menu-item-${label}`} disabled={disabled}>{ label }</StyledDropdownMenuItem>
          ))}
        </StyledDropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
};

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
  --radix-popper-anchor-width: 43.5938px;
  --radix-popper-anchor-height: 43px;
  --radix-popper-available-width: 88px;
  --radix-popper-available-height: 676px;
  --radix-popper-transform-origin: 50% 0px;
  padding: 10px 0;
  position: fixed;
  left: 0px;
  top: 0px;
  transform: translate3d(0px, 59px, 0px);
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
  })),

  /**
   * An optional className to be added.
   */
  className: PropTypes.string
};

export default DropdownMenu;

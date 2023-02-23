import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

const DropdownMenu = ({open, onOpenChange, trigger, items=[]}) => {
  const DropdownMenuRoot = DropdownMenuPrimitive.Root;
  const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
  const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

  return (
    <DropdownMenuRoot open={open} onOpenChange={onOpenChange}>
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
  min-width: 220px;
  background-color: white;
  padding: 5px;
  position: fixed;
  left: 0px;
  top: 0px;
  transform: translate3d(0px, 59px, 0px);
  min-width: max-content;
  z-index: auto;
  --radix-popper-anchor-width: 43.5938px;
  --radix-popper-anchor-height: 43px;
  --radix-popper-available-width: 88px;
  --radix-popper-available-height: 676px;
  --radix-popper-transform-origin: 50% 0px;
`;

const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;

  &[data-disabled] {
    color: lightgray;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: #c4b6e0;
    outline-color: mediumpurple;
  }
`;

export default DropdownMenu;

import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled from "styled-components";
import ImageIcon from "../ImageIcon";
import {QuestionIcon} from "../../static/icons/Icons";
import {TooltipArrow} from "@radix-ui/react-tooltip";
import PropTypes from "prop-types";

const Tooltip = ({
  label,
  icon=QuestionIcon,
  align="center",
  side="top",
  open,
  onOpenChange
}) => {
  const TooltipProvider = TooltipPrimitive.Provider;
  const TooltipRoot = TooltipPrimitive.Root;
  const TooltipTrigger = TooltipPrimitive.Trigger;
  const TooltipPortal = TooltipPrimitive.Portal;

  return (
    <TooltipProvider>
      <TooltipRoot disableHoverableContent={true} open={open} onOpenChange={onOpenChange}>
        <TooltipTrigger asChild>
          <StyledButton type="button">
            <ImageIcon icon={icon} />
          </StyledButton>
        </TooltipTrigger>
        <TooltipPortal>
          <StyledTooltipContent align={align} side={side} sideOffset={5}>
            { label }
            <StyledTooltipArrow />
          </StyledTooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.buttonTooltipBg};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  user-select: none;
  background-color: ${({theme}) => theme.tooltipBg};
  max-width: 18rem;
`;

const StyledTooltipArrow = styled(TooltipArrow)`
   fill: ${({theme}) => theme.tooltipBg};
`;

Tooltip.propTypes = {
  /**
   * The label to be displayed inside the tooltip.
   */
  label: PropTypes.string,

  /**
   * The icon to use inside the tooltip button.
   */
  icon: PropTypes.string,

  /**
   * The preferred alignment against the trigger.
   */
  align: PropTypes.oneOf(["center", "start", "end"]),

  /**
   * The preferred side of the trigger to render against when
   * open.
   */
  side: PropTypes.oneOf(["top", "right", "bottom", "left"])
};

export default Tooltip;

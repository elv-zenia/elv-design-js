import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import CloseIcon from "../../static/icons/close.svg";

const Dialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  cancelText="Cancel",
  CancelCallback,
  confirmText="Confirm",
  ConfirmCallback,
  danger,
  children,
  size="sm"
}) => {
  const DialogRoot = DialogPrimitive.Root;
  const DialogTrigger = DialogPrimitive.Trigger;
  const DialogTitle = DialogPrimitive.Title;
  const DialogDescription = DialogPrimitive.Description;
  const DialogClose = DialogPrimitive.Close;

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{ trigger }</DialogTrigger>
      <StyledDialogOverlay>
        <StyledDialogContent size={size}>
          <DialogTitle>{ title }</DialogTitle>
          <StyledDialogBody>
            {
              description &&
              <DialogDescription>{description}</DialogDescription>
            }
            { children }
          </StyledDialogBody>
          <Flex>
            <DialogClose asChild>
              <Button variant="ghost" OnClick={CancelCallback}>{ cancelText }</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant={danger ? "danger" : "primary"} OnClick={ConfirmCallback}>
                { confirmText }
              </Button>
            </DialogClose>
          </Flex>
          <DialogClose asChild>
            <CloseButton
              iconOnly={true}
              icon={CloseIcon}
              variant="ghost"
            />
          </DialogClose>
        </StyledDialogContent>
      </StyledDialogOverlay>
    </DialogRoot>
  );
};

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  background-color: ${({theme}) => theme.dialogOverlayBg};
  inset: 0;
  position: fixed;
`;

const StyledDialogContent = styled(DialogPrimitive.Content)`
  background: ${({theme}) => theme.dialogBg};
  border-radius: 6px;
  box-shadow: rgb(14 18 22 / 35%) 0 10px 38px -10px, rgb(14 18 22 / 20%) 0 10px 20px -15px;
  color: ${({theme}) => theme.dialogTextColor};
  display: flex;
  flex-direction: column;
  left: 50%;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;

  ${({size}) =>
  (size === "xs" &&
    `
    max-height: 48%;
    max-width: 24%;
  `) ||
  (size === "sm" &&
    `
    max-height: 72%;
    max-width: 36%;
  `) ||
  (size === "md" &&
    `
    max-height: 84%;
    max-width: 48%;
  `) ||
  (size === "lg" &&
    `
    max-height: 96%;
    max-width: 72%;
  `)
}
`;

const StyledDialogBody = styled("div")`
  height: 100%;
  overflow-y: auto;
`;

const Flex = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  
  button:first-child {
    margin-right: 0.5rem;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

Dialog.propTypes  = {
  /**
   * The controlled open state of the dialog. Must be used with onOpenChange.
   */
  open: PropTypes.bool,

  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange: PropTypes.func,

  /**
   * The button that opens the dialog.
   */
  trigger: PropTypes.object,

  /**
   * The title of the dialog.
   */
  title: PropTypes.string,

  /**
   * The description in the dialog.
   */
  description: PropTypes.string,

  /**
   * The text for the cancel button.
   */
  cancelText: PropTypes.string,

  /**
   * Event handler called when the cancel button is clicked.
   */
  CancelCallback: PropTypes.func,

  /**
   * The text for the confirm button.
   */
  confirmText: PropTypes.string,

  /**
   * Event handler called when the confirm button is clicked.
   */
  ConfirmCallback: PropTypes.func,

  /**
   * Specifies a danger variant for the primary button.
   */
  danger: PropTypes.bool,

  /**
   * The content of the dialog.
   */
  children: PropTypes.node,

  /**
   * Determines the size of the dialog.
   */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"])
};

export default Dialog;

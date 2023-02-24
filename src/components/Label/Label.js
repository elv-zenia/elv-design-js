import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import PropTypes from "prop-types";

const Label = ({label, htmlFor, className}) => {
  const LabelRoot = LabelPrimitive.Root;

  return (
    <LabelRoot htmlFor={htmlFor} className={className}>{ label }</LabelRoot>
  );
};

Label.propTypes = {
  /**
   * The text to display as the label.
   */
  label: PropTypes.string,

  /**
   * The id of the element the label is associated with.
   */
  htmlFor: PropTypes.string,

  /**
   * An optional className to be added.
   */
  className: PropTypes.string,
};

export default Label;

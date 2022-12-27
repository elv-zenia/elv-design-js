import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = ({label, htmlFor}) => {
  const LabelRoot = LabelPrimitive.Root;

  return (
    <LabelRoot htmlFor={htmlFor}>{ label }</LabelRoot>
  );
};

export default Label;

import React, {useState} from "react";
import styled from "styled-components";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import PropTypes from "prop-types";

const AspectRatio = ({
  image,
  alt,
  OnClick,
  ratio=(16 / 9),
  width=300,
  borderRadius=5,
  className=""
}) => {
  const AspectRatioRoot = AspectRatioPrimitive.Root;
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper onClick={OnClick} width={width} borderRadius={borderRadius} className={className}>
      <AspectRatioRoot ratio={ratio}>
        <img
          className={`image-${loading ? "hidden" : "visible"}`}
          src={image}
          onLoad={() => setLoading(false)}
          alt={alt}
        />
      </AspectRatioRoot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${({borderRadius}) => `${borderRadius}px`};
  overflow: hidden;
  width: ${({width}) => `${width}px`};
`;

AspectRatio.propTypes = {
  /**
   * A url to load an image from.
   */
  image: PropTypes.node.isRequired,

  /**
   * Alternative text to describe the aspect ratio.
   */
  alt: PropTypes.string,

  /**
   * Event handler called when the aspect ratio is clicked.
   */
  OnClick: PropTypes.func,

  /**
   * Defines the ratio of the aspect ratio.
   */
  ratio: PropTypes.number,

  /**
   * Defines the width of the aspect ratio.
   */
  width: PropTypes.number,

  /**
   * Defines the border radius of the aspect ratio.
   */
  borderRadius: PropTypes.number,

  /**
   * An optional className to be added.
   */
  className: PropTypes.string
};

export default AspectRatio;

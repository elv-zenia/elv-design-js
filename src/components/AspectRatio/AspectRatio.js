import React, {useState} from "react";
import styled from "styled-components";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import PropTypes from "prop-types";

const AspectRatio = ({
  image,
  title,
  OnClick,
  ratio=(16 / 9),
  width=300
}) => {
  const AspectRatioRoot = AspectRatioPrimitive.Root;
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper onClick={OnClick} width={width}>
      <AspectRatioRoot ratio={ratio}>
        <img
          className={`image-${loading ? "hidden" : "visible"}`}
          src={image}
          onLoad={() => setLoading(false)}
          alt={title}
        />
      </AspectRatioRoot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 12px;
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
  title: PropTypes.string,

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
  width: PropTypes.number
};

export default AspectRatio;

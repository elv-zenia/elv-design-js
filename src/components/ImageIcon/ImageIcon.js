import React, {useState} from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";

const ImageIcon = ({icon, alternateIcon, className, alt, title, props}) => {
  const [error, setError] = useState(false);

  className = `image-icon ${className || ""}`;

  const currentIcon = error ? alternateIcon : icon;
  const handleError = error ? undefined : () => setError(true);

  if(!currentIcon) { return null; }

  if(currentIcon.startsWith("<svg")) {
    return (
      <SVG src={currentIcon} className={className} alt={alt} />
    );
  } else {
    return (
      <img
        title={title}
        alt={alt}
        className={className}
        src={currentIcon}
        onError={handleError}
        {...props}
      />
    );
  }
};

ImageIcon.propTypes = {
  /**
   * The icon string to use
   */
  icon: PropTypes.string.isRequired,

  /**
   * An icon that is displayed in the event of an error
   */
  alternateIcon: PropTypes.string,

  /**
   * Any additional class names to use
   */
  className: PropTypes.string,

  /**
   * Alternative text to describe the icon
   */
  alt: PropTypes.string,

  /**
   * Title text for the icon
   */
  title: PropTypes.string,

  /**
   * Additional props
   */
  props: PropTypes.object
};

export default ImageIcon;

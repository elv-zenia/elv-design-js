import React, {useState} from "react";
import SVG from "react-inlinesvg";

const ImageIcon = ({icon, alternateIcon, className, label, title, props}) => {
  const [error, setError] = useState(false);

  className = `image-icon ${className || ""}`;

  const currentIcon = error ? alternateIcon : icon;
  const handleError = error ? undefined : () => setError(true);

  if(!currentIcon) { return null; }

  if(currentIcon.startsWith("<svg")) {
    return (
      <SVG src={currentIcon} className={className} alt={label} />
    );
  } else {
    return (
      <img
        title={title}
        alt={label}
        className={className}
        src={currentIcon}
        onError={handleError}
        {...props}
      />
    );
  }
};

export default ImageIcon;

import React, { ImgHTMLAttributes } from "react";

interface SvgIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}
const SvgIcon: React.FC<SvgIconProps> = ({ name }) => {
  const svgUrl = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${name}.svg`;
  return (
    <img
      src={svgUrl}
      alt="currency-icon"
      className="hidden sm:inline w-6"
    ></img>
  );
};

export default SvgIcon;

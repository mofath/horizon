import React from "react";

interface IconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: string | "inherit";
  size?: number | "inherit";
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, color, size }) => {
  const iconStyle: React.CSSProperties = {
    fill: color,
    stroke: color,
    color: color,
    width: size === "inherit" ? "inherit" : size,
    height: size === "inherit" ? "inherit" : size,
  };

  return <IconComponent style={iconStyle} />;
};

export default Icon;

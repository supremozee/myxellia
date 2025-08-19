import React from "react";

interface BarProps {
  height: string;
  color: string;
}
const Bar = ({ height, color }: BarProps) => {
  return <div className={`w-px]`} style={{ height: `${height}px`, background: color, border: `2px solid ${color}` }} />;
};

export default Bar;

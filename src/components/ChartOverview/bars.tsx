import React from "react";
import Bar from "./bar";

interface BarsProps {
  yAxis1: string;
  yAxis2: string;
  yAxis3: string;
  color1: string;
  color2: string;
  color3: string;
  month: string;
}
const Bars = ({
  yAxis1,
  yAxis2,
  yAxis3,
  color1,
  color2,
  color3,
  month,
}: BarsProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-x-[3px] items-end">
        <Bar height={yAxis1} color={color1} />
        <Bar height={yAxis2} color={color2} />
        <Bar height={yAxis3} color={color3} />
      </div>
      <div className="flex">
        <h6 className="text-[10px] font-medium text-[#919191]">{month}</h6>
      </div>
    </div>
  );
};

export default Bars;

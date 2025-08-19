import React from "react";
import Bars from "./bars";

const bar = [
  {
    month: "Jan",
    yAxis1: "24",
    yAxis2: "42",
    yAxis3: "49",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Feb",
    yAxis1: "19",
    yAxis2: "32",
    yAxis3: "22",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Mar",
    yAxis1: "26",
    yAxis2: "19",
    yAxis3: "17",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Apr",
    yAxis1: "29",
    yAxis2: "39",
    yAxis3: "22",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "May",
    yAxis1: "22",
    yAxis2: "16",
    yAxis3: "20",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Jun",
    yAxis1: "49",
    yAxis2: "64",
    yAxis3: "22",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Jul",
    yAxis1: "36",
    yAxis2: "49",
    yAxis3: "22",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Aug",
    yAxis1: "36",
    yAxis2: "20",
    yAxis3: "26",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
  {
    month: "Sep",
    yAxis1: "52",
    yAxis2: "48",
    yAxis3: "22",
    color1: "#4545FE",
    color2: "#12B76A",
    color3: "#F04438",
  },
];
const Chart = () => {
  return (
    <div className="flex items-baseline-last">
      <div className="flex gap-[5px] items-center h-[148px] mb-4">
        <ul className="list-none flex flex-col text-[10px] items-center justify-center font-[400] gap-y-[14px]">
          <li>50 m</li>
          <li>40 m</li>
          <li>30 m</li>
          <li>20 m</li>
          <li>10 m</li>
          <li>0 m</li>
        </ul>
        <div className="bg-[#E4E4E4] h-full w-px" />
      </div>
      <div className="flex items-end gap-x-[18px]">
        {bar.map((b, i) => {
          return (
            <Bars
              key={i}
              yAxis1={b.yAxis1}
              yAxis2={b.yAxis2}
              yAxis3={b.yAxis3}
              color1={b.color1}
              color2={b.color2}
              color3={b.color3}
              month={b.month}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;

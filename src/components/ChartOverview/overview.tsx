"use client"
import React, { useState } from "react";

const Overview = () => {
  const [activePeriod, setActivePeriod] = useState("1 Year");
  const handleClick = (period: string) => {
    setActivePeriod(period);
  };
  return (
    <section className="flex flex-col gap-[12px]">
      <div className="flex justify-between">
        <div>
          <h3 className="font-[600] text-[20px] font-[#191919]">
            Sales Overview
          </h3>
          <p className="text-[12px] font-[400] text-[#606060] mt-[12px]">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <button className="cursor-pointer flex items-center justify-center px-[37px] py-[15.5px] border border-[#D6D6D6] rounded-full text-[#191919] fonnt-medium text-center">
          View Transactions
        </button>
      </div>
      <section className="flex justify-end gap-[12px]">
        {["1 Week", "1 Month", "1 Year"].map((item, i) => {
          return (
            <button
              onClick={() => handleClick(item)}
              key={i}
              className={`text-[14px] font-[400] text-[#3D3D3D] py-2 px-5 cursor-pointer ${
                activePeriod === item &&
                "bg-[#F5F5F5] rounded-[8px] font-semibold"
              }`}
            >
              {item}
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default Overview;

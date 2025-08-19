import React from "react";
import AmountCard from "./AmountCard";
import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";
const details = [
  {
    amount: "₦120,000,000.00",
    term: "Total Inflow",
    arrow: <ArrowUp />,
    rise: "2.5%",
    riseColor: "#12B76A",
    color: "#4545FE",
  },
  {
    amount: "₦50,000,000.00",
    term: "MRR",
    arrow: <ArrowUp />,
    rise: "2.5%",
    riseColor: "#12B76A",
    color: "#12B76A",
  },
  {
    amount: "₦200,000,000.00",
    term: "Commission Revenue",
    arrow: <ArrowDown />,
    rise: "0.5%",
    riseColor: "#14B8A6",
    color: "#14B8A6",
  },
  {
    amount: "₦100,000,000.00",
    term: "GMV",
    arrow: <ArrowDown />,
    rise: "0.5%",
    riseColor: "#F04438",
    color: "#F04438",
  },
];
const Inflow = () => {
  return (
    <section className="flex justify-end flex-wrap gap-4">
      {details.map((item, i) => {
        return (
          <AmountCard
            key={i}
            amount={item.amount}
            term={item.term}
            color={item.color}
            arrow={item.arrow}
            riseColor={item.riseColor}
            rise={item.rise}
          />
        );
      })}
    </section>
  );
};

export default Inflow;

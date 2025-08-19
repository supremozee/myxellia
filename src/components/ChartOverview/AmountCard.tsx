import React from "react";

interface AmountCardProps {
  amount: string;
  term: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arrow: any;
  rise: string;
  color: string;
  riseColor: string;
}
const AmountCard = ({
  amount,
  term,
  arrow,
  rise,
  color,
  riseColor,
}: AmountCardProps) => {
  return (
    <div className="border border-[#E4E4E4] rounded-[12px] pl-[15px] pr-[21px] py-[13px] w-[189px] max-h-[73px]">
      <div>
        <h3 className={`text-[19px] font-semibold`} style={{ color: color }}>
          {amount}
        </h3>
        <div className="flex gap-x-[7px] items-center">
          <h6 className="text-[10px] font-medium">{term}</h6>
          {arrow}
          <span
            style={{ color: riseColor }}
            className={`text-[10px] font-[400]`}
          >
            {rise}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AmountCard;

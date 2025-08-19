import React from "react";
import GreaterThanSign from "../Icons/GreaterThanSign";
import TitleAndValue from "../TitleAndValue";

interface OverviewCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  id: number;
  title: string;
  className?: string;
  total: string;
  active?: number;
  archived?: string;
  riders?: string;
  subscribers?: string;
}
const OverviewCard = ({
  Icon,
  title,
  className,
  total,
  active,
  archived,
  riders,
  subscribers,
}: OverviewCardProps) => {
  return (
    <div
      className={`rounded-[16px] border border-[#E4E4E4] border-t-0 border-collapse flex flex-col ${className} `}
    >
      <header className="flex justify-between py-[13px] px-4 items-center border-t-[#E4E4E4] border-b-[#E4E4E4] bg-[#E4E4E4] rounded-t-[16px]">
        <div className="flex items-center gap-[10px]">
          {Icon}
          <h5 className="text-[14px] font-medium text-[#292929]">{title}</h5>
        </div>
        <div className="flex items-center gap-[1.5px]">
          <h5 className="text-[12px] font-medium text-[#4545FE]">View all</h5>
          <GreaterThanSign />
        </div>
      </header>
      <main className="flex justify-between p-4 box-border">
        {total && <TitleAndValue title={"Total"} value={total} />}
        {active
          ?  <TitleAndValue title={"Active"} value={active} />
          : riders && <TitleAndValue title={"Riders"} value={riders} />}
        {archived
          ?  <TitleAndValue title={"Archived"} value={archived} />
          : subscribers && (
              <TitleAndValue title={"Subcribers"} value={subscribers} />
            )}
      </main>
    </div>
  );
};

export default OverviewCard;

import React from "react";
import Home from "../Icons/Home";
import User from "../Icons/User";
import OverviewCard from "../OverviewCard";
interface OverviewProps {
  id: number;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  total: string;
  active?: number;
  archived?: string;
  riders?: string;
  subscribers?: string;
}
const overview: OverviewProps[] = [
  {
    id: 1,
    title: "Listings Overview",
    icon: <Home />,
    total: "1.8k",
    active: 80,
    archived: "1k",
  },
  {
    id: 2,
    title: "Users Overview",
    icon: <User color="#4545FE" />,
    total: "1.8k",
    riders: "8.5k",
    subscribers: "7.5k",
  },
];
const Overview = () => {
  return (
    <section className="flex flex-col gap-y-5 justify-center">
      {overview.map((item) => {
        return (
          <OverviewCard
            key={item.id}
            id={item.id}
            Icon={item.icon}
            subscribers={item.subscribers}
            riders={item.riders}
            total={item.total}
            title={item.title}
            active={item.active}
            archived={item.archived}
          />
        );
      })}
    </section>
  );
};

export default Overview;

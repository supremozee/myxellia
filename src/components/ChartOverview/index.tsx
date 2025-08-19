import Chart from "./chart";
import Inflow from "./Inflow";
import Overview from "./overview";

const ChartOverview = () => {
  return (
    <section className="flex flex-col gap-[12px]">
      <Overview />
      <div className=" w-full border border-[#E4E4E4]" />
      <section className="flex justify-between">
        <div className="basis-[90%]">
          <Chart/>
        </div>
        <div className="grow-1">
          <Inflow />
        </div>
      </section>
    </section>
  );
};

export default ChartOverview;

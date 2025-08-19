"use client";
import React, { useState } from "react";
import Budget from "../Icons/Budget";
import VueSax from "../Icons/VueSax";
import Analytics from "../Icons/Analytics";
import BarIcon from "../Icons/BarIcon";
import Modal from "../Modal";

const budgetData = [
  {
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
    icon: <VueSax />,
  },
  {
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
    icon: <Analytics />,
  },
  {
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: <BarIcon />,
  },
];
const Budgeting = ({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen:(o:boolean)=>void}) => {
  const handleOpen = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onClick={handleOpen}>
      <section className="flex flex-col max-w-[438px] relative z-50 bg-white h-[40vh]">
        <section className="w-full bg-[#0C2841] px-5 pt-5">
          <div className="bg-[url('/overlay.svg')] rounded-[11.29px] bg-center bg-no-repeat  object-cover h-[258px] flex justify-center items-center">
            {/* <Budget /> */}
          </div>
        </section>
        <section className="px-[47px] py-6 relative bottom-12 bg-white">
          <div className="flex flex-col gap-6 w-[344px] bottom-10 z-50">
            {budgetData.map((budget) => {
              return (
                <div
                  key={budget.title}
                  className="flex gap-[12px] items-center w-full"
                >
                  <div>{budget.icon}</div>
                  <div className="flex gap-[4px] flex-col flex-1 max-w-[280px]">
                    <h1 className="font-semibold text-[16px] text-[#191919] leading-normal">
                      {budget.title}
                    </h1>
                    <p className="text-[#606060] font-[400] text-[12px]">
                      {budget.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="h-[46px] w-[344px] rounded-[25px] flex justify-center items-center bg-[#18181B] text-white mt-6">
            Create Budget
          </button>
        </section>
      </section>
    </Modal>
  );
};

export default Budgeting;

"use client";
import React, { useState } from "react";
import Dashboard from "../Icons/Dashboard";
import Listing from "../Icons/Listing";
import User from "../Icons/User";
import Request from "../Icons/Request";
import Application from "../Icons/Application";
import Container from "../Container";
import Search from "../Icons/Search";

interface navigationItemsProps {
  name: string;
  Icon: React.ReactNode;
  tab: number;
}
const navigationItems: navigationItemsProps[] = [
  {
    name: "Dashboard",
    Icon: <Dashboard />,
    tab: 1,
  },
  {
    name: "Listings",
    Icon: <Listing />,
    tab: 2,
  },
  {
    name: "Users",
    Icon: <User />,
    tab: 3,
  },
  {
    name: "Requests",
    Icon: <Request />,
    tab: 4,
  },
  {
    name: "Applications",
    Icon: <Application />,
    tab: 5,
  },
];
const Navigation = () => {
  const [isActiveTab, setIsActiveTab] = useState("Dashboard");
  const [value, setValue] = useState("");
  const handleClick = (n: string) => {
    setIsActiveTab(n);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <nav>
      <Container className="flex justify-between py-[15px]">
        {navigationItems.map(({ name, Icon }) => {
          return (
            <button
              onClick={() => handleClick(name)}
              key={name}
              className={`flex gap-2 px-10 py-2 cursor-pointer items-center ${
                isActiveTab === name && "bg-[#F5F5F5] rounded-[8px]"
              }`}
            >
              {Icon}
              <span className="text-[14px] font-normal">{name}</span>
            </button>
          );
        })}
        <section className="border border-[#E4E4E4] bg-[#F5F5F5] px-3 py-2 rounded-[12px] relative">
          <div className="flex w-[291px] gap-1 ">
            <Search />
            <input
              type="search"
              name="search"
              value={value}
              className="grow-1 outline-0 border-0"
              // onFocus={() => setIsFocused(true)}
              onChange={handleChange}
            />
          </div>
        </section>
      </Container>
    </nav>
  );
};

export default Navigation;

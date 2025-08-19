"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Notification from "../Icons/Notification";
import Calculator from "../Icons/Calculator";
import Calender from "../Icons/Calender";
import Message from "../Icons/Message";
import Profile from "../Profile";
import Budgeting from "../Budgeting";
import DaysAndDate from "../DatePicker/DaysAndDate";

const Header = () => {
  const [openModalB, setOpenModalB] = useState(false);
  const [openModalD, setOpenModalD] = useState(false);
  const handleClickB = () => {
    setOpenModalB((prev)=>!prev);
  };
  const handleClickD = () => {
    setOpenModalD((prev)=>!prev);
  };
  return (
    <>
      {openModalB && <Budgeting isOpen={openModalB} setIsOpen={setOpenModalB} />}
      {openModalD && <DaysAndDate isOpen={openModalD} setIsOpen={setOpenModalD}  />}
      <header className="bg-[#191919] py-4">
        <Container className="flex justify-between items-center">
          <section>
            <Image
              src={"/Myxellia logo.svg"}
              alt="Myxellia logo"
              width={153}
              height={26}
            />
          </section>
          <ul className="flex gap-x-6 items-center">
            <li>
              <Notification />
            </li>
            <li onClick={handleClickB} className="cursor-pointer">
              <Calculator />
            </li>
            <li onClick={handleClickD} className="cursor-pointer">
              <Calender />
            </li>
            <li>
              <Message />
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </Container>
      </header>
    </>
  );
};

export default Header;

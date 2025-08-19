import React from "react";
import Messaging from "../Icons/Messaging";

const Floating = () => {
  return (
    <div
      className="fixed bg-[#242526] bottom-[212px]
     right-[70px] z-20 rounded-full w-[58px] h-[58px] cursor-pointer flex justify-center items-center border border-[#FFFFFF33]"
    >
      <Messaging />
    </div>
  );
};

export default Floating;

import React, { useState } from "react";
import main from "../assets/main.png";
import money from "../assets/money.png";

import ReferModal from "./ReferModal";

const Refer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-[#EEF5FF] shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-3xl flex items-center justify-between p-10 md:my-8 md:px-7"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="flex flex-col  justify-start items-center md:items-start gap-5">
        <img src={money} alt='money' className="p-0 m-0 w-26 h-18 md:w-auto md:h-auto absolute left-3 md:left-65 top-55 md:top-57.5 gap-0" />

          <h1 className="text-[#1A202C] text-[35px] md:text-[75px] font-bold pt-0 mt-0 ">
            Let's Learn & Earn
          </h1>
          <p className="text-[#1A202C]  text-[16px] md:text-[41px] font-normal">
            Get a chance to win up-to {" "}
            <span className="text-[22px]  md:text-[56px] text-[#1A73E8] font-bold">
              Rs. 15,000
            </span>
          </p>
          <button
            className="text-white bg-[#1A73E8] rounded-md px-10 py-3"
            onClick={() => setIsModalOpen(true)}
          >
            Refer Now
          </button>
        </div>
        <img src={money} alt='money' className="p-0 m-0 w-26 h-18 md:w-auto md:h-auto absolute scale-x-[-1] top-55 md:top-57.5 right-3 md:right-70" />

        <img
          src={main}
          className="hidden md:block md:w-3xl md:h-3xl"
          alt="refer-and-earn"
        />
      </div>

      {isModalOpen && <ReferModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Refer;

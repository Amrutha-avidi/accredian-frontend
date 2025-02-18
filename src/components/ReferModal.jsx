import React from "react";
import ReferralForm from "./ReferralForm";
import { IoCloseOutline } from "react-icons/io5";

const ReferModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-transparent bg-opacity-30 backdrop-blur-[3px] ">
      <div className="bg-white rounded-lg p-6 shadow-[0_0_20px_rgba(0,0,0,0.2)] relative">
        {/* Close Button (Top-Right) */}
        <button
          className="absolute top-3 right-3 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
          onClick={onClose}
        >
          <IoCloseOutline size={24} className="text-gray-600" />
        </button>

        {/* Referral Form Component */}
        <ReferralForm onClose={onClose} />
      </div>
    </div>
  );
};

export default ReferModal;

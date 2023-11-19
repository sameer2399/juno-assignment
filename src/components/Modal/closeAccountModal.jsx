import React from "react";
import { Modal } from "../index";

const CloseAccountModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between">
        <h1 className="text-lg text-[18px] font-[500]">Close account</h1>
        <svg
          onClick={onClose}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
            fill="#050505"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#050505"
          />
        </svg>
      </div>
      <form className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-[400] text-[#777676]">Email</label>
          <input type="text" className="w-full border rounded-md h-8" />
        </div>
        <div className="flex gap-6 ">
          <div>
            <label className="text-[14px] font-[400] text-[#050505]">Want to file UAR</label>
          </div>

          <div>
            <input className="border border-[#C9C8C8]" type="radio" name="" />
            <label className="ml-1 text-[14px] font-[400] text-[#050505] ">Yes</label>
            <input className="ml-4" type="radio" name="" />
            <label className="ml-1 text-[14px] font-[400] text-[#050505]">No</label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#777676]">Reason</label>
          <input type="text" className="w-full border rounded-md h-8" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#777676]">Note</label>
          <textarea
            className="border border-[#E4E4E4] rounded-md"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <div className="mt-[0.65rem]">
            <input type="radio" name="" />
            <label className="ml-2 text-[14px] text-[#777676]">
              Charge closure fee
            </label>
          </div>
          <button className="bg-[#E4E4E4] text-[#ADADAD] font-[500] text-[16px] py-3 px-9 rounded-lg">
            Close Account
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { CloseAccountModal };

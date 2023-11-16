import React from "react";
import { Sidebar } from "../../components";
const Monitoring = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-8">
        <h1 className="font-[500] text-2xl">Monitoring</h1>

        <div className="flex justify-between bg-blue-500 w-[75vw] pl-4 pt-4 pb-2">
          <div>
            <button className="text-[14px] my-2 mr-8">Pending</button>
            <button className="text-[14px] my-2">Completed</button>
          </div>
          <div>
            <button className="text-[14px] bg-[#F6D8D8] text-[#D13B3B] font-bold rounded-md p-2"><img src="./x-circle.png" alt="" />Close account</button>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { Monitoring };

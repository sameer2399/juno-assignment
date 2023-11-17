import React from "react";
import { Sidebar, Table } from "../../components";
import {pendingData} from "../../data/mockData";
import { useState, useEffect } from "react";

const Monitoring = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
    setData(pendingData);
    setFilteredData(pendingData);
  }, []);

 
  if (!filteredData) return null;

  return (
    <div className="flex">
      <Sidebar />

      <div className="pl-[20vw] pt-8">
        <h1 className="font-[500] text-2xl">Monitoring</h1>

        <div className="flex justify-between w-[75vw] pt-4 pb-0 border-b-2 border-[#e4e4e4]">
          <div>
            <button className="text-[14px] text-[#ADADAD] font-[500] mt-2 px-4 pb-4">
              Pending
            </button>
            <button className="text-[14px] mt-2 px-4 text-[#ADADAD] font-[500] pb-4">
              Completed
            </button>
          </div>
          <div>
            <button className="flex text-[14px] bg-[#F6D8D8] text-[#D13B3B] font-bold rounded-md p-2 pr-4">
              <img
                className="ml-2 mr-1 mt-[0.1rem]"
                src="./x-circle.png"
                alt=""
              />
              Close account
            </button>
          </div>
        </div>

        <div className=" flex gap-2 w-[75vw] mt-10">
          <div className="flex relative">
            <img
              className="absolute mt-[1rem] ml-4"
              src="./search.png"
              alt=""
            />
            <input
              className="border border-[#ADADAD] text-[14px] font-[500] rounded-md w-[30vw] p-2 pl-10"
              type="text"
              name=""
              placeholder="Search"
              id=""
            />
          </div>

          <div className="p-2">
            <select
              className="bg-[#F5F5F5] text-[#777676] text-[14px] font-[500] rounded-md p-[0.45rem]"
              name="Trigger reason"
              id="Trigger reason"
            >
              <option value="" disabled selected>
                Trigger reason
              </option>
              <option value="IP Change">IP Change</option>
              <option value="FIFO">FIFO</option>
            </select>
          </div>

          <div className="p-2">
            <select
              className="bg-[#F5F5F5] font-[500] text-[#777676] text-[14px] rounded-md p-[0.45rem]"
              name="Risk level"
              id="Risk level"
            >
              <option value="" disabled selected>
                Risk level
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <Table data={filteredData} />
      </div>
    </div>
  );
};

export { Monitoring };

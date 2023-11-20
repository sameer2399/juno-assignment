import React, { useEffect, useState } from "react";
import moment from "moment";
import { checkRiskLevelStatus } from "../../utils/helper_function";

const Table = (props) => {
  const { data, selected } = props;
  console.log(data, selected);
  const [tempData, setTempData] = useState(null);
  const [isDateSorted, setIsDateSorted] = useState(false);
  const [isRiskSorted, setIsRiskSorted] = useState(false);
  const [isTimeToCloseSorted, setIsTimeToCloseSorted] = useState(false);
  const [isInQueueForSorted, setIsInQueueForSorted] = useState(false);

  useEffect(() => {
    setTempData(data);
  }, [data]);

  if(!tempData) return null;

  const displayData = tempData.map((item, index) => {
    return (
      <tr key={index} className="overflow-hidden">
        <td className="p-2">
          <div className="flex">
            <div className="ml-2 w-[15vw] ">
              <p className="text-[#050505] font-[500] text-[14px]">
                {item.name}
              </p>
              <p className="text-[#777676] font-[400] text-[12px]">
                {item.email}
              </p>
            </div>
            <div className="pt-3 pl-4">
              <img src="./external-link.png" alt="" />
            </div>
          </div>
        </td>
        <td
          style={{
            color: checkRiskLevelStatus(item.riskLevel)?.color,
          }}
          className="flex gap-[0.4rem] font-[600] text-[14px]"
        >
          <div
            style={{
              backgroundColor: checkRiskLevelStatus(item.riskLevel)?.color,
            }}
            className="mt-6 h-[0.65rem] w-[0.65rem] rounded-full"
          ></div>
          <div className="mt-[1.15rem]">{item.riskLevel}</div>
        </td>
        {selected === "Pending" ? (
          <td className="text-[#050505] font-[500] text-[14px]">
            {item.triggerReason}
          </td>
        ) : (
          <td className="text-[#050505] font-[500] text-[14px]">
            {item.actionReason}
          </td>
        )}
        {selected === "Pending" ? (
          <td className="text-[#050505] font-[500] text-[16px]">
            {item.inQueueFor}
          </td>
        ) : (
          <td className="text-[#050505] font-[500] text-[16px]">
            {item.timeToClose}
          </td>
        )}
        <td className="text-[#777676] font-[500] text-[14px]">
          {moment(item.dateAddedOn).format("DD MMM, YYYY")}
        </td>
        {selected === "Pending" ? (
          <td className="text-[#777676] font-[500] text-[12px]">
            <p className="text-[#050505] font-[500] text-[16px]">
              {item.reviewInfo?.isReviewed}
            </p>
            {item.reviewInfo?.reviewedDate}
          </td>
        ) : (
          <td className="text-[#777676] font-[500] text-[12px] pl-2">
            <p className="text-[#050505] font-[500] text-[14px]">
              {item.actionInfo?.name}
            </p>
            {item.actionInfo?.email}
          </td>
        )}
      </tr>
    );
  });


  //sort data based on date added on
  const handleSortDataBasedOnDate = () => {
    const sortedData = [...tempData].sort((a, b) => {
      return new Date(b.dateAddedOn) - new Date(a.dateAddedOn);
    });
    setTempData(sortedData);
  };  

  //sort data based on risk level strings low, medium, high
  const handleSortDataBasedOnRiskLevel = () => {
    const sortedData = [...tempData].sort((a, b) => {
      if(a.riskLevel === "Low" && b.riskLevel === "Medium") return -1;
      if(a.riskLevel === "Low" && b.riskLevel === "High") return -1;
      if(a.riskLevel === "Medium" && b.riskLevel === "High") return -1;
      if(a.riskLevel === "Medium" && b.riskLevel === "Low") return 1;
      if(a.riskLevel === "High" && b.riskLevel === "Low") return 1;
      if(a.riskLevel === "High" && b.riskLevel === "Medium") return 1;
      return 0;
    });
    setTempData(sortedData);
  };

  //sort data based on comparing strings in time to close
  const handleSortDataBasedOnTimeToClose = () => {
    const sortedData = [...tempData].sort((a, b) => {
      if(a.timeToClose < b.timeToClose) return -1;
      if(a.timeToClose > b.timeToClose) return 1;
      return 0;
    });
    setTempData(sortedData);
  };

  //sort data based on comparing strings in in queue for
  const handleSortDataBasedOnInQueueFor = () => {
    const sortedData = [...tempData].sort((a, b) => {
      if(a.inQueueFor < b.inQueueFor) return -1;
      if(a.inQueueFor > b.inQueueFor) return 1;
      return 0;
    });
    setTempData(sortedData);
  };



  return (
    <>
      <table className="mt-4 table-auto w-[75vw] border border-separate border-spacing-0 border-[#E4E4E4] rounded-t-3xl overflow-hidden">
        <thead className="text-[#050505] text-[12px] font-[500] bg-[#F5F5F5]">
          <tr className="">
            <th className=" text-left w-[30vw] p-4">User</th>
            <th className=" text-left w-[10vw] gap-2 flex  p-4 pl-0">
              <div>Risk level</div>
              <div>
                <img onClick={(e) => {
                  setIsRiskSorted(!isRiskSorted);
                  if(isRiskSorted){
                    handleSortDataBasedOnRiskLevel();
                  }else{
                    setTempData(data);
                  }
                }} className="cursor-pointer" src="./chevrons-up-down.png" alt="" />
              </div>
            </th>
            {selected === "Pending" ? (
              <th className="w-[18vw] text-left ">Trigger reason</th>
            ) : (
              <th className="w-[18vw] text-left ">Action reason</th>
            )}
            {selected === "Pending" ? (
              <th className="w-[10vw] text-left flex gap-2">
                <div>In queue for</div>
                <div>
                  <img onClick={(e) => {
                    setIsInQueueForSorted(!isInQueueForSorted);
                    if(isInQueueForSorted){
                      handleSortDataBasedOnInQueueFor();
                    }else{
                      setTempData(data);
                    }
                  }} className="cursor-pointer" src="./chevrons-up-down.png" alt="" />
                </div>
              </th>
            ) : (
              <th className="w-[10vw] text-left flex gap-2  ">
                <div>Time to close</div>
                <div>
                  <img onClick={(e) => {
                    setIsTimeToCloseSorted(!isTimeToCloseSorted);
                    if(isTimeToCloseSorted){
                      handleSortDataBasedOnTimeToClose();
                    }else{
                      setTempData(data);
                    }
                  }} className="cursor-pointer" src="./chevrons-up-down.png" alt="" />
                </div>
              </th>
            )}
            <th className="w-[19vw] text-left ">
              <div className="flex gap-2"><div>Date added on</div>
              <div>
                <img onClick={(e) => {
                  setIsDateSorted(!isDateSorted);
                  if(isDateSorted){
                    handleSortDataBasedOnDate();
                  }else{
                    setTempData(data);
                  }
                }} className="cursor-pointer" src="./chevrons-up-down.png" alt="" />
              </div></div>
            </th>
            {selected === "Pending" ? (
              <th className="w-[16vw] text-left ">Previously reviewed</th>
            ) : (
              <th className="w-[16vw] text-left pl-2">Action taken by</th>
            )}
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </>
  );
};

export { Table };

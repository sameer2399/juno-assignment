import React from "react";
import moment from "moment";
import { checkRiskLevelStatus } from "../../utils/helper_function";

const Table = (props) => {
  const { data, selected } = props;
  console.log(data, selected);

  if (!data) return null;

  const displayData = data.map((item, index) => {
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
            <div className="pt-3">
              <img src="./external-link.png" alt="" />
            </div>
          </div>
        </td>
        <td
          style={{
            color: checkRiskLevelStatus(item.riskLevel)?.color,
          }}
          className=" font-[500] text-[14px]"
        >
          {item.riskLevel}
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
          <td className="text-[#050505] font-[500] text-[14px]">
            {item.inQueueFor}
          </td>
        ) : (
          <td className="text-[#050505] font-[500] text-[14px]">
            {item.timeToClose}
          </td>
        )}
        <td className="text-[#777676] font-[500] text-[14px]">
          {moment(item.dateAddedOn).format("DD MMM, YYYY")}
        </td>
        {selected === "Pending" ? (
          <td className="text-[#777676] font-[500] text-[12px]">
            <p className="text-[#050505] font-[500] text-[14px]">
              {item.reviewInfo?.isReviewed}
            </p>
            {item.reviewInfo?.reviewedDate}
          </td>
        ) : (
          <td className="text-[#777676] font-[500] text-[12px]">
            <p className="text-[#050505] font-[500] text-[14px]">
              {item.actionInfo?.name}
            </p>
            {item.actionInfo?.email}
          </td>
        )}
      </tr>
    );
  });

  return (
    <>
      <table className="mt-4 table-auto w-[75vw] border border-separate border-spacing-0 border-[#E4E4E4] rounded-t-3xl overflow-hidden">
        <thead className="text-[#050505] text-[12px] font-[500] bg-[#F5F5F5]">
          <tr className="">
            <th className="p-3 text-left">User</th>
            <th>Risk level</th>
            {selected === "Pending" ? (
              <th>Trigger reason</th>
            ) : (
              <th>Action reason</th>
            )}
            {selected === "Pending" ? (
              <th>In queue for</th>
            ) : (
              <th>Time to close</th>
            )}
            <th>Date added on</th>
            {selected === "Pending" ? (
              <th>Previously reviewed</th>
            ) : (
              <th>Action taken by</th>
            )}
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </>
  );
};

export { Table };

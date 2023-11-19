import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  
  const menuItems = [
    "Overview",
    "Onboarding",
    "Monitoring",
    "Flagging",
    "Source of Income",
    "UAR",
  ];

 
  return (
    <div className="fixed flex flex-col border-r border-r-1 border-[#777676] h-[100vh] w-[17vw] py-[6vh] px-[2vw]">

      <div className="h-[10%]">
        <img src={"./logohere.png"} alt="" />
      </div>

      <div className="h-[80%] mt-[40%] flex flex-col text-[#777676]">
        
          {menuItems.map((item, index) => (
            <NavLink
            style={{ padding: 12 }}
            key={index}
            to={`/${item.toLowerCase()}`}
            className={({ isActive, isPending }) =>
              `p-2 cursor-pointer rounded-lg ${isActive? "bg-[#4643ee42] text-[#4643EE]" : ""}`
            }
          >
            {item}

          </NavLink>
          ))}
        
      </div>

      <div className="h-[10%] flex justify-center items-center gap-2 extralg:-ml-8">
        <img className="h-12" src="./user.png" alt="" />
        <div className="">
          <p className="font-bold">Elon Musk</p>
          <p className="text-[#777676] font-[500]">elon@twitter.com</p>
        </div>
      </div>
      
    </div>
  );
};

export { Sidebar };

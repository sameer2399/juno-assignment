import React from "react";

export const CommonTabs = ({ children }) => {
  return <>{children}</>;
};

export const allItems = [
  {
    name: "Pending",
    component: CommonTabs,
  },
  {
    name: "Completed",
    component: CommonTabs,
  },
];

const [Pending, Completed] = allItems;
export const initialTabs = [Pending, Completed];
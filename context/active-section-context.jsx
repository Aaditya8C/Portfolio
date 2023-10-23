"use client";
import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext(null);
const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionContextProvider;

//Hook to use it in other components
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    return context;
}

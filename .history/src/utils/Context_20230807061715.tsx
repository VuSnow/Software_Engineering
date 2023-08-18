import React from "react";
import { createContext, useState, useEffect } from "react";

const Context = React.createContext({});

const AppContext = ({ children }: any) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default AppContext;

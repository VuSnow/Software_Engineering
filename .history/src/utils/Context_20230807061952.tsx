import { faL } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { createContext, useState, useEffect } from "react";

const Context = React.createContext({});

const AppContext = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        showLoginForm,
        setShowLoginForm,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

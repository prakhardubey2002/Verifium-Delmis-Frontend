import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAddress, setIsAddress] = useState(() => {
    // Retrieve the value from local storage
    const storedIsAddress = localStorage.getItem("isAddress");
    return storedIsAddress ? JSON.parse(storedIsAddress) : "user";
  });

  useEffect(() => {
    // Update local storage when the state changes
    localStorage.setItem("isAddress", JSON.stringify(isAddress));
    console.log(isAddress);
  }, [isAddress]);

  return (
    <AppContext.Provider value={{ isAddress, setIsAddress }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
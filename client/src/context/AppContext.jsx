import { createContext } from "react";

// Create context
export const AppContext = createContext();

// Context provider
export const AppContextProvider = ({ children }) => {
  const value = {
    // put your shared states or functions here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

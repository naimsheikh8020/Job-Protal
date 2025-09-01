import { createContext, useState } from "react";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// Context provider
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title:'',
    location: ''
  })
  const [isSearched, setIsSearched] = useState(false)
  const value = {
    // put your shared states or functions here
    setSearchFilter, searchFilter,
    isSearched, setIsSearched
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

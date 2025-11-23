import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// Context provider
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  //Function to fetch jobs
  const fetchJobs = async () => {
    setJobs(jobsData)
  };
  useEffect(()=>{
    fetchJobs()
  },[])

  const value = {
    // put your shared states or functions here
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin, setShowRecruiterLogin
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

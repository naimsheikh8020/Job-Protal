import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full bg-white px-4">
        {/* Search Filter from Hero Component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600 ">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 border  bg-blue-50 border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-5 inline-flex items-center gap-2.5 border  bg-red-50 border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                    />
                  </span>
                )}
              </div>
            </>
          )}
        {/* Category Filter */}
        <div>
          <h4>Search by Category</h4>
          <ul>
            {JobCategories.map((category, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" name="" id="" />
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobListing;

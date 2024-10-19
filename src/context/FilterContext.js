"use client"; 
import React, { createContext, useState, useContext } from "react";

// Create the context
const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({ children }) => {
  const [checkedFilters, setCheckedFilters] = useState({
    colours: [],
    bodyFits: [],
    dressTypes: [],
    lengths: [],
    neckLines: [],
    seasons: [],
    sleeveLengths: [],
    styles: [],
  });

  const updateCheckedFilters = (filterType, value) => {
    setCheckedFilters((prev) => {
      const currentChecked = prev[filterType];
      if (currentChecked.includes(value)) {
        return {
          ...prev,
          [filterType]: currentChecked.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentChecked, value],
        };
      }
    });
  };

  return (
    <FilterContext.Provider value={{ checkedFilters, updateCheckedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the FilterContext
export const useFilter = () => {
  return useContext(FilterContext);
};

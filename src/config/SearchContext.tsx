import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext<{
  searchedWord: string;
  setSearchedWord: (word: string) => void;
}>({
  searchedWord: "",
  setSearchedWord: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedWord, setSearchedWord] = useState("");
  return (
    <SearchContext.Provider value={{ searchedWord, setSearchedWord }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);


import React, { useRef } from "react";
import { searchBarStyle, searchBarContainer } from './Styles';

interface SearchBarProps {
  setQuery: (query: string) => void;
  query: string
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); 
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = "#007bff";
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = "#ddd";
    }
  };

  return (
    <div style={searchBarContainer}>
      <input type="text"
        style={searchBarStyle}
        placeholder="Search posts"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar;
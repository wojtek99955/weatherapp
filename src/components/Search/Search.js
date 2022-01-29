import React, { useState, useEffect, useRef } from "react";
import { SearchContainer, SearchIcon } from "./SerachStyles";

function Search({ inputOnChange, search }) {
  const inputRef = useRef();
  const [searchToggle, setSearchToggle] = useState(false);
  const handleSearchToggle = () => {
    setSearchToggle((prev) => !prev);
  };

  useEffect(() => {
    if (searchToggle) {
      inputRef.current.focus();
    }
  }, [searchToggle]);

  return (
    <SearchContainer>
      {searchToggle ? (
        <input
          type="text"
          placeholder="Type City.."
          onChange={inputOnChange}
          onKeyPress={search}
          ref={inputRef}
        />
      ) : null}
      <SearchIcon onClick={handleSearchToggle} />
    </SearchContainer>
  );
}

export default Search;

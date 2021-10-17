import React, { useState } from "react";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const searchLocation = () => {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    const urlRegex =
      /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;
    if (
      searchValue &&
      (ipRegex.test(searchValue) || urlRegex.test(searchValue))
    ) {
      props.fetchLocation(searchValue);
      setSearchValue("");
    } else {
      alert("Please give a valid IP address or URL");
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="button"
        className="search__btn"
        onClick={() => searchLocation()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

import { useState } from "react";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const searchLocation = () => {
    props.fetchLocation(searchValue);
    setSearchValue("");
  };

  return (
    <div className="search">
      <input
        className="search"
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

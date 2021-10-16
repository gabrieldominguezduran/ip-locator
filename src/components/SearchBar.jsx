import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";

function SearchBar(props) {
  const { setSearchHistory } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const searchLocation = () => {
    fetchLocation();
  };

  const fetchLocation = async () => {
    const API_KEY = `afba4189c828952e1a96f223666bbf5a`;

    const url = `http://api.ipstack.com/${searchValue}?access_key=${API_KEY}`;

    try {
      console.log("TRY");
      const response = await fetch(url);
      console.log(response, "RESP");
      const data = await response.json();
      console.log(data, "DATA");
      setSearchHistory(data);
      setSearchValue("");
    } catch (error) {
      console.log("error", error);
    }
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

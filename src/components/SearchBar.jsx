function SearchBar(props) {
  return (
    <div className="search">
      <input className="search" type="search" name="search" id="search" />
      <button type="button" className="search__btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

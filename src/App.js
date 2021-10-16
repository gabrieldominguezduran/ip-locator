import { useState, useEffect, useContext } from "react";
import LocationMap from "./components/LocationMap";
import SearchBar from "./components/SearchBar";
import InformationContainer from "./components/InformationContainer";
import HistoryContainer from "./components/HistoryContainer";
import { SearchContext } from "./components/SearchContext";
import "./App.css";

function App() {
  const { searchHistory, setSearchHistory } = useContext(SearchContext);
  const [currentUser, setCurrentUser] = useState({});
  const [search, setSearch] = useState({});

  const API_KEY = `afba4189c828952e1a96f223666bbf5a`;

  const url = `http://api.ipstack.com/check?access_key=${API_KEY}`;

  useEffect(() => {
    fetchCurrentUserIp();
    // eslint-disable-next-line
  }, []);

  const fetchCurrentUserIp = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchLocation = async (value) => {
    try {
      const response = await fetch(
        `http://api.ipstack.com/${value}?access_key=${API_KEY}`
      );
      const data = await response.json();

      setSearch(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <main className="App">
      <header>
        <h1 className="title">Ip map locator</h1>
      </header>

      <LocationMap
        title={"User location"}
        className={"user"}
        position={[currentUser.latitude, currentUser.longitude]}
        text={"Your current location, zoom in!"}
      />
      <InformationContainer
        title={"Your IP adress is:"}
        className={"user"}
        ip={currentUser.ip}
      />

      <SearchContext.Provider value={{ searchHistory, setSearchHistory }}>
        <SearchBar fetchLocation={fetchLocation} />
        <HistoryContainer />
      </SearchContext.Provider>

      <LocationMap
        title={"Map"}
        className={"map"}
        position={[search.latitude, search.longitude]}
      />

      <InformationContainer
        title={"Last search:"}
        className={"search"}
        ip={search.ip}
      />
    </main>
  );
}

export default App;

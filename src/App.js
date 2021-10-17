import { useState, useEffect } from "react";
import LocationMap from "./components/LocationMap";
import SearchBar from "./components/SearchBar";
import InformationContainer from "./components/InformationContainer";
import HistoryContainer from "./components/HistoryContainer";
import { SearchContext } from "./components/SearchContext";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [search, setSearch] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchCurrentUserIp();
    // eslint-disable-next-line
  }, []);

  const fetchCurrentUserIp = async () => {
    try {
      const response = await fetch(
        `/api/check?access_key=${process.env.REACT_APP_API_KEY}&hostname=1`
      );
      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchLocation = async (value) => {
    try {
      const response = await fetch(
        `/api/${value}?access_key=${process.env.REACT_APP_API_KEY}&hostname=1`
      );
      const data = await response.json();
      console.log(data);
      if (!data.error) {
        setSearch(data);
        setValue(value);

        let history = JSON.parse(localStorage.getItem("history")) || [];

        history.push(value);
        localStorage.setItem("history", JSON.stringify(history));
        setSearchHistory(history);
      } else {
        alert(data.error.info);
      }
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
      <SearchBar fetchLocation={fetchLocation} />
      <LocationMap
        title={"Map"}
        className={"map"}
        position={[search.latitude, search.longitude]}
        text={"Your search location, zoom in!"}
      />
      <InformationContainer
        title={"Searched address:"}
        className={"search"}
        ip={value}
      />
      <SearchContext.Provider value={{ searchHistory, setSearchHistory }}>
        <HistoryContainer />
      </SearchContext.Provider>
    </main>
  );
}

export default App;

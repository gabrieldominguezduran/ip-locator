import { useState, useEffect } from "react";
import UserLocationMap from "./components/UserLocationMap";
import SearchMap from "./components/SearchMap";
import SearchBar from "./components/SearchBar";
import InformationContainer from "./components/InformationContainer";
import HistoryContainer from "./components/HistoryContainer";
import { UserContext } from "./components/UserContext";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState([]);

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

  return (
    <main className="App">
      <header>
        <h1 className="title">Ip map locator</h1>
      </header>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <UserLocationMap title={"User location"} className={"user"} />
        <InformationContainer title={"User info"} className={"user"} />
      </UserContext.Provider>

      <SearchBar />
      <SearchMap title={"Map"} className={"map"} />

      <InformationContainer title={"Map info"} className={"search"} />
      <HistoryContainer />
    </main>
  );
}

export default App;

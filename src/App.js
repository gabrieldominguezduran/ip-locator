import LocationMap from "./components/LocationMap";
import SearchBar from "./components/SearchBar";
import InformationContainer from "./components/InformationContainer";
import HistoryContainer from "./components/HistoryContainer";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header>
        <h1 className="title">Ip map locator</h1>
      </header>

      <HistoryContainer />
      <LocationMap title={"User location"} className={"user"} />
      <SearchBar />
      <LocationMap title={"Map"} className={"map"} />
      <InformationContainer title={"User info"} className={"user"} />
      <InformationContainer title={"Map info"} className={"search"} />
    </main>
  );
}

export default App;

import { useContext } from "react";
import { SearchContext } from "./SearchContext";

function HistoryContainer(props) {
  const { searchHistory } = useContext(SearchContext);
  console.log(searchHistory);
  return (
    <section className="history">
      <h2 className="title">Search history</h2>
    </section>
  );
}

export default HistoryContainer;

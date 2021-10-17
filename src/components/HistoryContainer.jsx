import { useContext } from "react";
import { SearchContext } from "./SearchContext";

function HistoryContainer(props) {
  const { searchHistory } = useContext(SearchContext);

  return (
    <section className="history">
      <h2 className="title">Search history</h2>
      <ul className="history-list">
        {(searchHistory || []).map((ip, i) => {
          return (
            <li key={i} className="history-list__item">
              {ip}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default HistoryContainer;

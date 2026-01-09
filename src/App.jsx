import { useState, useMemo } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  const suggestions = useMemo(
    () =>
      history.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      ),
    [text, history]
  );

  const search = () => {
    if (text && !history.includes(text)) {
      setHistory([...history, text]);
    }
  };

  return (
    <div className="page">
      <div className="search-card">
        <h2 className="logo">Search</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="search-btn" onClick={search}>
            Search
          </button>
          <button className="clear-btn" onClick={() => setText("")}>
            Clear
          </button>
        </div>

        {text && suggestions.map((item, i) => (
          <div
            key={i}
            className="suggestion"
            onClick={() => setText(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SearchWindow({ searchQuery, classes }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      searchQuery(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="field has-addons">
      <p className="control">
        <input
          type="text"
          className="input is-small"
          value={inputValue}
          placeholder="Enter keywords..."
          onChange={e => {
            setInputValue(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
      </p>
      <p className="control">
        <button
          className={classes.join(" ")}
          onClick={() => {
            searchQuery(inputValue);
            setInputValue("");
          }}
        >
          Search
        </button>
      </p>
    </div>
  );
}

SearchWindow.propTypes = {
  searchQuery: PropTypes.func.isRequired,
  classes: PropTypes.array
};

SearchWindow.defaultProps = {
  value: ""
};

import React from "react";
import PropTypes from "prop-types";

export default function SearchWindow({
  searchQuery,
  setQuery,
  query,
  classes,
  onKeyPress
}) {  
  return (
    <div className="field has-addons">
      <p className="control">
        <input
          type="text"
          className="input is-small"
          value={query}
          placeholder="Enter keywords..."
          onChange={e => setQuery(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </p>
      <p className="control">
        <button
          className={classes.join(" ")}
          onClick={() => searchQuery(query)}
        >
          Search
        </button>
      </p>
    </div>
  );
}

SearchWindow.propTypes = {
  searchQuery: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  query: PropTypes.string,
  classes: PropTypes.array
};

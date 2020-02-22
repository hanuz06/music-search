import React, { useState } from "react";
import PropTypes from "prop-types";


export default function SearchWindow({searchQuery, setQuery, query}) {
  return (
    <div className="field has-addons">
      <p className="control">
        <input
          type="text"
          className="input is-small"
          placeholder="Enter keywords..."
          onChange={e => setQuery(e.target.value)}
        />
      </p>
      <p className="control">
        <button
          className="button is-small is-info"
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
  query: PropTypes.string
};

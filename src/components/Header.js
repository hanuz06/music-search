import React from "react";
import PropTypes from "prop-types";
import SearchWindow from "./SearchWindow";

export default function Header({ searchQuery, classes }) {
  return (
    <header className="block">
      <h1 className=" has-text-left title is-4 headline-style">Music Search</h1>
      <SearchWindow searchQuery={searchQuery} classes={classes} />
    </header>
  );
}

Header.propTypes = {
  searchQuery: PropTypes.func.isRequired,
  classes: PropTypes.array
};

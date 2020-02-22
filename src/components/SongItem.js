import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SongItem({ songName, artistName }) {
  //   <div className="block">
  //   <span className="icon">
  //     <i className="fa fa-star" aria-hidden="true"></i>
  //   </span>
  //   <span className="icon">
  //     <i className="fa fa-star-o" aria-hidden="true"></i>
  //   </span>
  // </div>

  return (
    <div className="level" style={{ marginBottom: "5px" }}>
      <div className="is-pulled-left">
        <span>{songName}</span>-
        <span>{artistName}</span>
        <span className="icon">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  songName: PropTypes.string,
  artistName: PropTypes.string,
};

SongItem.defaultProps = {
  artistName: ["No artist names"]
};
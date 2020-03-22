import React from "react";
import PropTypes from "prop-types";

export default function SongItemDisplay({
  selectFavSong,
  songName,
  artist,
  isSongFavorite,
  isFavorite
}) {
  return (
    <div className="has-text-left list-items-style" onClick={selectFavSong}>
      <span>{songName}</span> &nbsp;&#8722;&nbsp;
      <span>{artist}</span>
      {isSongFavorite || isFavorite ? (
        <span className="icon">
          <i className="fa fa-star-o icon-orange" aria-hidden="true"></i>
        </span>
      ) : (
        <span className="icon">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      )}
    </div>
  );
}

SongItemDisplay.propTypes = {
  selectFavSong: PropTypes.func,
  songName: PropTypes.string,
  artist: PropTypes.string,
  isFavorite: PropTypes.bool,
  isSongFavorite: PropTypes.bool
};

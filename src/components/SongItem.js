import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SongItem({
  id,
  songName,
  artist,
  favSong,
  isSongFavorite
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const selectFavSong = () => {
    setIsFavorite(true);
    favSong({
      id,
      songName,
      artist,
      isSongFavorite: true
    });
  };

  return (
    <div
      className="level"
      style={{ marginBottom: "5px" }}
      onClick={selectFavSong}
    >
      <div className="is-pulled-left">
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
    </div>
  );
}

SongItem.propTypes = {
  id: PropTypes.string,
  songName: PropTypes.string,
  artist: PropTypes.string,
  favSong: PropTypes.func.isRequired,
  isSongFavorite: PropTypes.bool,
};

SongItem.defaultProps = {
  id: "1",
  songName: "No song name",
  artist: "No artist names",
  isFavorite: false
};

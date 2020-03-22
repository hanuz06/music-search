import React, { useState } from "react";
import PropTypes from "prop-types";
import SongItemDisplay from "./SongItemDisplay";

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
    <SongItemDisplay
      selectFavSong={selectFavSong}
      songName={songName}
      artist={artist}
      isSongFavorite={isSongFavorite}
      isFavorite={isFavorite}
    />
  );
}

SongItem.propTypes = {
  id: PropTypes.string,
  songName: PropTypes.string,
  artist: PropTypes.string,
  favSong: PropTypes.func.isRequired,
  isSongFavorite: PropTypes.bool
};

SongItem.defaultProps = {
  id: "1",
  songName: "No song name",
  artist: "No artist names",
  isFavorite: false
};

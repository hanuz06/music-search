import React, { useState } from "react";
import PropTypes from "prop-types";
import SongItem from "./SongItem";

export default function SongList({ songs, favSong }) {
  return songs.map(song => (
    <SongItem
      key={song.id}
      id={song.id}
      songName={song.songName}
      artist={song.artist}
      isSongFavorite={song.isSongFavorite}
      favSong={favSong}
    />
  ));
}

SongList.propTypes = {
  songs: PropTypes.array,
  favSong: PropTypes.func
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import SongItem from "./SongItem";

export default function SongList({ songs }) {
  return songs.map(song => <SongItem key={song.id} songName={song.songName} artistName={song.artist} />);
}

SongList.propTypes = {
  songs: PropTypes.array,
};
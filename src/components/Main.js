import React from "react";
import PropTypes from "prop-types";
import ArtistList from "./ArtistList";
import SongList from "./SongList";

export default function Main({ songs, favSong, artists, favArtist }) {
  return (
    <main className="block">
      <div className="columns is-desktop is-centered">
        <section className="column is-narrow">
          <p className="has-text-left is-size-5 column-margin-bottom">Songs</p>
          {songs && <SongList songs={songs} favSong={favSong} />}
        </section>
        <section className="column">
          <p className="has-text-left is-size-5 column-margin-bottom">
            Artists
          </p>
          {artists && <ArtistList artists={artists} favArtist={favArtist} />}
        </section>
      </div>
    </main>
  );
}

Main.propTypes = {
  artists: PropTypes.array,
  favArtist: PropTypes.func.isRequired,
  songs: PropTypes.array,
  favSong: PropTypes.func.isRequired
};

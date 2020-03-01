import React from "react";
import ArtistList from "./components/ArtistList";
import SongList from "./components/SongList";
import SearchWindow from "./components/SearchWindow";
import { favArtist, favSong } from "./helpers/helperFunctions";
import {
  SET_ARTISTS_LIST,
  SET_SONGS_LIST,
  IS_LOADING,
  IS_NOT_LOADING
} from "./types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { songs, artists, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  const classes = ["button", "is-small", "is-info"];

  if (isLoading) {
    classes.push("is-loading");
  }

  let isFavSongsExist = JSON.parse(localStorage.getItem("favSongs"));
  let isFavArtistsExist = JSON.parse(localStorage.getItem("favArtists"));

  window.onload = () => {
    isFavSongsExist &&
      dispatch({ type: SET_SONGS_LIST, payload: isFavSongsExist });

    isFavArtistsExist &&
      dispatch({ type: SET_ARTISTS_LIST, payload: isFavArtistsExist });
  };

  const searchQuery = query => {
    if (query) {
      dispatch({ type: IS_LOADING });
      const BASE_URL =
        "https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production?";
      let FETCH_URL = `${BASE_URL}q=${query}`;

      axios
        .get(FETCH_URL)
        .then(
          response => (
            localStorage.removeItem("favSongs"),
            localStorage.removeItem("favArtists"),
            dispatch({ type: IS_NOT_LOADING }),
            response.data
          )
        )
        .then(json => {
          const artistsList = json.artists.items;
          const artistsArray = [];

          artistsList.forEach(artist => {
            const artistInfo = {
              id: artist.id,
              artistName: artist.name,
              isArtistFavorite: false
            };
            artistsArray.push(artistInfo);
          });

          dispatch({ type: SET_ARTISTS_LIST, payload: artistsArray });

          const songsList = json.tracks.items;
          const songsArray = [];

          songsList.forEach(song => {
            const songAndArtist = {
              id: song.id,
              songName: song.name,
              artist: song.artists[0].name,
              isSongFavorite: false
            };
            songsArray.push(songAndArtist);
          });

          dispatch({ type: SET_SONGS_LIST, payload: songsArray });
        })
        .catch(e => {
          console.log(e.message);
          console.log(
            "Can’t access " + FETCH_URL + " response. Blocked by browser?"
          );
        });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="block">
          <h1 className=" has-text-left title is-4 headline-style">
            Music Search
          </h1>
          <SearchWindow searchQuery={searchQuery} classes={classes} />
        </header>

        <main className="block">
          <div className="columns is-desktop is-centered">
            <section className="column is-narrow">
              <p className="has-text-left is-size-5 column-margin-bottom">
                Songs
              </p>
              {songs && <SongList songs={songs} favSong={favSong} />}
            </section>
            <section className="column">
              <p className="has-text-left is-size-5 column-margin-bottom">
                Artists
              </p>
              {artists && (
                <ArtistList artists={artists} favArtist={favArtist} />
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

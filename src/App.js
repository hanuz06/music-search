import React, { useEffect, useCallback } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { favArtist, favSong } from "./helpers/helperFunctions";
import {
  SET_ARTISTS_LIST,
  SET_SONGS_LIST,
  IS_LOADING,
  IS_NOT_LOADING,
} from "./types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { songs, artists, isLoading } = useSelector((state) => state);
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

  const searchQuery = (query) => {
    if (query) {
      dispatch({ type: IS_LOADING });
      const BASE_URL =
        "https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production?";
      let FETCH_URL = `${BASE_URL}q=${query}`;

      axios
        .get(FETCH_URL)
        .then((response) => {
          localStorage.clear();
          dispatch({ type: IS_NOT_LOADING });
          let json = response.data;
          const artistsList = json.artists.items;
          const artistsArray = [];

          artistsList.forEach((artist) => {
            const artistInfo = {
              id: artist.id,
              artistName: artist.name,
              isArtistFavorite: false,
            };
            artistsArray.push(artistInfo);
          });

          dispatch({ type: SET_ARTISTS_LIST, payload: artistsArray });

          const songsList = json.tracks.items;
          const songsArray = [];

          songsList.forEach((song) => {
            const songAndArtist = {
              id: song.id,
              songName: song.name,
              artist: song.artists[0].name,
              isSongFavorite: false,
            };
            songsArray.push(songAndArtist);
          });

          dispatch({ type: SET_SONGS_LIST, payload: songsArray });
        })
        .catch((e) => {
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
        <Header searchQuery={searchQuery} classes={classes} />
        <Main
          songs={songs}
          favSong={favSong}
          artists={artists}
          favArtist={favArtist}
        />
      </div>
    </div>
  );
}

export default App;

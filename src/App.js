import React, { useState } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList";
import SongList from "./components/SongList";
import SearchWindow from "./components/SearchWindow";
import { favArtist, favSong } from "./helpers/helperFunctions";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const classes = ["button", "is-small", "is-info"];

  let isFavSongsExist = JSON.parse(localStorage.getItem("favSongs"));
  let isFavArtistsExist = JSON.parse(localStorage.getItem("favArtists"));
  window.onload = () => {
    if (isFavSongsExist) {
      setSongs(isFavSongsExist);
    }

    if (isFavArtistsExist) {
      setArtists(isFavArtistsExist);
    }
  };

  if (isLoading) {
    classes.push("is-loading");
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      searchQuery(query);
    }
  };

  const searchQuery = query => {
    if (query) {
      const BASE_URL =
        "https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production?";
      let FETCH_URL = `${BASE_URL}q=${query}`;

      setIsLoading(true);
      axios
        .get(FETCH_URL)
        .then(
          response => (
            setQuery(""),
            localStorage.removeItem("favSongs"),
            localStorage.removeItem("favArtists"),
            setIsLoading(false),
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

          setArtists(artistsArray);

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

          setSongs(songsArray);
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
          <SearchWindow
            searchQuery={searchQuery}
            setQuery={setQuery}
            query={query}
            classes={classes}
            onKeyPress={handleKeyPress}
          />
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

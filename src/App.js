import React, { useState, useEffect } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList";
import SongList from "./components/SongList";
import SearchWindow from "./components/SearchWindow";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const classes = ["button", "is-small", "is-info"];

  if (isLoading) {
    classes.push("is-loading");
  }

  const searchQuery = query => {
    const BASE_URL =
      "https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production?";
    let FETCH_URL = `${BASE_URL}q=${query}`;

    setIsLoading(true);
    axios
      .get(FETCH_URL)
      .then(response => (setQuery(""),setIsLoading(false),  response.data))
      .then(json => {
        const artistsList = json.artists.items;
        const artistsArray = [];

        artistsList.forEach(artist => {
          const artistInfo = {
            id: artist.id,
            name: artist.name
          };
          artistsArray.push(artistInfo);
        });

        const songsList = json.tracks.items;
        const songsArray = [];

        songsList.forEach(song => {
          const songAndArtist = {
            id: song.id,
            songName: song.name,
            artist: song.artists[0].name
          };
          songsArray.push(songAndArtist);
        });

        setArtists(artistsArray);
        setSongs(songsArray);
        // console.log("artistsArray", artistsArray);
        //  console.log("Songs", songsArray);
      })
      .catch(e => {
        console.log(e.message);
        console.log(
          "Can’t access " + FETCH_URL + " response. Blocked by browser?"
        );
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <h1
            className="level level-left title is-4"
            style={{ marginBottom: "10px", marginTop: "20px" }}
          >
            Music Search
          </h1>
          <SearchWindow
            searchQuery={searchQuery}
            setQuery={setQuery}
            query={query}
            classes={classes}
          />
        </div>

        <div className="block">
          <div className="columns">
            <div className="column is-7">
              <p
                className="has-text-left is-size-5"
                style={{ marginBottom: "10px" }}
              >
                Songs
              </p>
              {songs ? <SongList songs={songs} /> : ""}
            </div>
            <div className="column is-4">
              <p
                className="has-text-left is-size-5"
                style={{ marginBottom: "10px" }}
              >
                Artists
              </p>
              {artists ? <ArtistList artists={artists} /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

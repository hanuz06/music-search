import React, { useState } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList";
import SearchWindow from "./components/SearchWindow";

function App() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [query, setQuery] = useState("");

  const searchQuery = query => {
    const BASE_URL =
      "https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production?";
    let FETCH_URL = `${BASE_URL}q=${query}`;
    fetch(FETCH_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        const artistsList = json.artists.items;
        const artistsArray = [];

        artistsList.forEach(artist => {
          artistsArray.push(artist.name);
        });

        const songsList = json.tracks.items;
        const songsArray = [];

        songsList.forEach(song => {
          const songAndArtist = {
            songName: song.name,
            artist: song.artists[0].name
          };
          songsArray.push(songAndArtist);
        });

        setArtists(artistsArray);
        setSongs(songsArray);
        // console.log("artistsArray", artistsArray);
        // console.log("Songs", songsArray);
      })
      .catch(() =>
        console.log(
          "Can’t access " + FETCH_URL + " response. Blocked by browser?"
        )
      );
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
          />
        </div>

        <div className="block">
          <div className="columns">
            <div className="column is-6">
              <p
                className="level-left is-size-5"
                style={{ marginBottom: "10px" }}
              >
                Songs
              </p>
            </div>
            <div className="column is-4">
              <p
                className="level-left is-size-5"
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

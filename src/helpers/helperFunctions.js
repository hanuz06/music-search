let favSongs = [];
export const favSong = songData => {
  let songIsExist = false;
  // Verify that selected favorite song does not exist in a list of selected favorite songs before sending to local storage to prevent duplication
  favSongs.map(songInArray => {
    if (songInArray.id === songData.id) {
      songIsExist = true;
    }
  });

  if (!songIsExist) {
    favSongs.push(songData);
    localStorage.setItem("favSongs", JSON.stringify(favSongs));
  }
};

let favArtists = [];
export const favArtist = artistData => {
  let artistIsExist = false;
  // Verify that selected favorite artist does not exist in a list of selected favorite artists before sending to local storage to prevent duplication
  favArtists.map(artistInArray => {
    if (artistInArray.id === artistData.id) {
      artistIsExist = true;
    }
  });

  if (!artistIsExist) {
    favArtists.push(artistData);
    localStorage.setItem("favArtists", JSON.stringify(favArtists));
  }
};

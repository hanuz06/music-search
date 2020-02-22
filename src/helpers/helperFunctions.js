let favSongs = [];
export const favSong = songData => {
  let songIsExist = false;
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

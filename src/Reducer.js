import {
  SET_ARTISTS_LIST,
  SET_SONGS_LIST,
  IS_LOADING,
  IS_NOT_LOADING
} from "./types";

// State structure:
// const state = {
//   songs: [
//     {
//       id: "",
//       songName: "",
//       artist: "",
//       isSongFavorite: false
//     }
//   ],
//   artists: [
//     {
//       id: "",
//       artistName: "",
//       isArtistFavorite: false
//     }
//   ],
//   isLoading: false
// };

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_ARTISTS_LIST:
      return { ...state, artists: [...action.payload] };
    case SET_SONGS_LIST:
      return { ...state, songs: [...action.payload] };
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_NOT_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default reducer;

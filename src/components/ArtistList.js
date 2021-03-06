import React from "react";
import PropTypes from "prop-types";
import ArtistItem from "./ArtistItem";

export default function ArtistList({ artists, favArtist }) {
  return artists.map(artist => (
    <ArtistItem
      key={artist.id}
      id={artist.id}
      artistName={artist.artistName}
      isArtistFavorite={artist.isArtistFavorite}
      favArtist={favArtist}
    />
  ));
}

ArtistList.propTypes = {
  artists: PropTypes.array,
  favArtist: PropTypes.func.isRequired
};

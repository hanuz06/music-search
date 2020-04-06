import React, { useState } from "react";
import PropTypes from "prop-types";
import ArtistItemDisplay from "./ArtistItemDisplay";

export default function ArtistItem({
  id,
  artistName,
  isArtistFavorite,
  favArtist
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const selectFavArtist = () => {
    setIsFavorite(true);
    favArtist({
      id,
      artistName,
      isArtistFavorite: true
    });
  };

  return (
    <ArtistItemDisplay
      selectFavArtist={selectFavArtist}
      artistName={artistName}
      isArtistFavorite={isArtistFavorite}
      isFavorite={isFavorite}
    />
  );
}

ArtistItem.propTypes = {
  id: PropTypes.string,
  artistName: PropTypes.string,
  isArtistFavorite: PropTypes.bool,
  favArtist: PropTypes.func.isRequired
};

ArtistItem.defaultProps = {
  id: "1",
  artistName: "No artist names",
  isFavorite: false
};

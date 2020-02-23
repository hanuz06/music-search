import React, { useState } from "react";
import PropTypes from "prop-types";

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
    <div className="has-text-left list-items-style" onClick={selectFavArtist}>
      <span>{artistName}</span>
      {isArtistFavorite || isFavorite ? (
        <span className="icon">
          <i className="fa fa-star-o icon-orange" aria-hidden="true"></i>
        </span>
      ) : (
        <span className="icon">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      )}
    </div>
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
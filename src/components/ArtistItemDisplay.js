import React from "react";
import PropTypes from "prop-types";

export default function ArtistItemDisplay({
  selectFavArtist,
  artistName,
  isArtistFavorite,
  isFavorite
}) {
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

ArtistItemDisplay.propTypes = {
  artistName: PropTypes.string,
  isArtistFavorite: PropTypes.bool,
  isFavorite: PropTypes.bool,
  selectFavArtist: PropTypes.func
};

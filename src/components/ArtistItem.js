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
      name: artistName,
      isArtistFavorite: true
    });
  };

  return (
    <div
      className="level"
      style={{ marginBottom: "5px" }}
      onClick={selectFavArtist}
    >
      <div className="is-pulled-left">
        <span>{artistName}</span>
        {isArtistFavorite || isFavorite ? (
          <span className="icon">
            <i className="fa fa-star-o i-con-yellow" aria-hidden="true"></i>
          </span>
        ) : (
          <span className="icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        )}
      </div>
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

import React, { useState } from "react";
import PropTypes from "prop-types";
import ArtistItem from "./ArtistItem";

export default function ArtistList({ artists }) {
  return artists.map(artist => <ArtistItem artist={artist} />);
}

ArtistList.propTypes = {};

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ArtistItem({ artist }) {
  //   <div className="block">
  //   <span className="icon">
  //     <i className="fa fa-star" aria-hidden="true"></i>
  //   </span>
  //   <span className="icon">
  //     <i className="fa fa-star-o" aria-hidden="true"></i>
  //   </span>
  // </div>

  return (
    <div className="level" style={{marginBottom:'5px', }}>
      <div className="is-pulled-left">
        <span>{artist}</span>
        <span className="icon">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

ArtistItem.propTypes = {};

ArtistItem.defaultProps = {
  artist: ["Stranger"]
};

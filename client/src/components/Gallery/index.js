import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>

      <Link to={`/upload`}>Upload</Link>
    </div>
  );
};

export default Gallery;
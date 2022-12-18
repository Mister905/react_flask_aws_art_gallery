import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_gallery_list } from "../../actions/gallery";
import Preloader from "../Preloader";

const Gallery = () => {
  const { gallery_list, loading_gallery_list } = useSelector(
    (state) => state.gallery
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_gallery_list());
  }, [loading_gallery_list]);

  function render_gallery() {
    return (
      <div>
        {gallery_list.map((file, i) => {
          return (
            <div key={i}>
              <div className="row">
                <div className="col m12">
                  <img src={file} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Gallery</h1>

      <Link to={`/upload`}>Upload</Link>

      <div className="mt-50">
        {loading_gallery_list ? (
          <div className="row">
            <div className="col m10 offset-m1 center-align">
              <Preloader />
            </div>
          </div>
        ) : (
          render_gallery()
        )}
      </div>
    </div>
  );
};

export default Gallery;

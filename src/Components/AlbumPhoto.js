import React, { useState } from "react";
import Style from "./AlbumPhoto.module.css";
import Photo from "./Photo";

export default function AlbumPhoto({ photos }) {
  const [displayPhoto, isDisplayPhoto] = useState(false);
  const [photoSelectionne, setPhotoSelectionne] = useState();

  const afficherPhoto = (e) => {
    //NES je réucpère la photo cliquée
    let photoEnGrand = e.target.src.replace("S_", "L_");
    setPhotoSelectionne(photoEnGrand);
    isDisplayPhoto(true);
  };

  const masquerPhoto = () => {
    isDisplayPhoto(false);
  };

  return (
    <div className={Style.Album}>
      {displayPhoto ? (
        <Photo photo={photoSelectionne} onClose={masquerPhoto} />
      ) : (
        ""
      )}
      {photos.map((photo) => (
        <img
          className={Style.Photo}
          src={photo}
          alt=""
          onClick={(e) => afficherPhoto(e)}
        />
      ))}
    </div>
  );
}

import React from "react";
import MonStyle from "./Photo.module.css";

export default function Photo({ photo, onClose }) {
  const fermerPhoto = () => {
    onClose();
  };

  return (
    <div className={MonStyle.Fond} onClick={fermerPhoto}>
      <img className={MonStyle.Photo} src={photo} alt="" />
    </div>
  );
}

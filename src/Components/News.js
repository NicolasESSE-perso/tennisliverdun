import React from "react";
import Style from "./News.module.css";
import Separateur from "./Separateur";
import AlbumPhoto from "./AlbumPhoto";

export default function News({ article }) {
  return (
    <div className={Style.News}>
      <div className="Titre2">{article.titre}</div>
      <div className="SousTitre">{article.date}</div>
      <div className="Texte" style={{ marginTop: "20px" }}>
        {article.texte}
      </div>
      <div>
        <AlbumPhoto photos={article.photos} />
      </div>
      <div>
        <Separateur />
      </div>
    </div>
  );
}

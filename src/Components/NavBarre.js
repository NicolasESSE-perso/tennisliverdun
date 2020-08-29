import React, { useState } from "react";
import Style from "./NavBarre.module.css";
import { Link } from "react-router-dom";

//NIE Composant permettant d'afficher le menu
function ItemMenu({ libelle, itemSelectionne, url, onClick }) {
  let monStyle = Style.NonSelectionne;

  if (libelle === itemSelectionne) {
    monStyle = Style.Selectionne;
  } else {
    monStyle = Style.NonSelectionne;
  }
  return (
    <Link to={url}>
      <div className={monStyle} onClick={onClick}>
        {libelle}
      </div>
    </Link>
  );
}

//NIE compostant gérant la barre de navigation
export default function NavBarre() {
  const [itemSelectionne, setItemSelectionne] = useState("News");

  return (
    <div className={Style.NavBarre}>
      <ItemMenu
        libelle="News"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("News")}
        url="/"
      />
      <ItemMenu
        libelle="Ecole de tennis"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("Ecole de tennis")}
        url="/ecole"
      />
      <ItemMenu
        libelle="Adresse & Contact"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("Adresse & Contact")}
        url="/adresse"
      />
      <ItemMenu
        libelle="Tarifs"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("Tarifs")}
        url="/tarifs"
      />
    </div>
  );
}

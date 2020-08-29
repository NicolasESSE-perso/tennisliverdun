import React, { useState, useEffect } from "react";
import Style from "./NavBarre.module.css";
import { Link } from "react-router-dom";

//NIE Composant permettant d'afficher le menu
function ItemMenu({ libelle, itemSelectionne, url, onClick }) {
  let monStyle = Style.NonSelectionne;

  if (itemSelectionne === url) {
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

  useEffect(() => {
    //NIE je cherche la page courante si je rentre avec déjà une url
    let page = window.location.pathname;
    if (page !== "") {
      setItemSelectionne(page);
    }
  }, []);

  return (
    <div className={Style.NavBarre}>
      <ItemMenu
        libelle="News"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("/")}
        url="/"
      />
      <ItemMenu
        libelle="Ecole de tennis"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("/ecole")}
        url="/ecole"
      />
      <ItemMenu
        libelle="Adresse & Contact"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("/adresse")}
        url="/adresse"
      />
      <ItemMenu
        libelle="Tarifs"
        itemSelectionne={itemSelectionne}
        onClick={(e) => setItemSelectionne("/tarifs")}
        url="/tarifs"
      />
    </div>
  );
}

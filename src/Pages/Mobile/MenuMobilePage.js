import React from "react";
import MonStyle from "./MenuMobilePage.module.css";
import { Link } from "react-router-dom";
import BoutonTenUp from "../../Components/Boutons/BoutonTenUp";

function ItemMenu({ Texte, url }) {
  return (
    <div className={MonStyle.ItemMenu}>
      <Link to={url}>
        <div className={MonStyle.FondMenu}>{Texte} </div>
      </Link>
    </div>
  );
}

export default function MenuMobilePage() {
  return (
    <div className={MonStyle.MenuMobilePage}>
      <ItemMenu Texte="News" url="/" />
      <ItemMenu Texte="Ecole de tennis" url="/ecole" />
      <ItemMenu Texte="Adresse & Contact" url="/adresse" />
      <ItemMenu Texte="Tarifs" url="/tarifs" />
      <BoutonTenUp hauteur="60px" texte="(Inscription)" largeur="100%" />
    </div>
  );
}
